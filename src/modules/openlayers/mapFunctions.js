import fetchIndicatorData from './fetchIndicatorData.js';
import styleFunction from './styleFunction.js';

var ol = window.ol;
var proj = ol.proj;
var Map = ol.Map;
var View = ol.View;
var defaultControls = ol.control.defaults;
var Feature = ol.Feature;
var defaultInteractions = ol.interaction.defaults;
var GeoJSON = ol.format.GeoJSON;
var TileLayer = ol.layer.Tile;
var VectorLayer = ol.layer.Vector;
var VectorTileLayer = ol.layer.VectorTile;
var VectorTileSource = ol.source.VectorTile;
var VectorSource = ol.source.Vector;
var my_data_projection = proj.get("EPSG:4326");
var my_feature_projection = proj.get("EPSG:3857");

// binary search of sorted indicator layer data by geo_id for quartile rank
export function bsearch(Arr,value) {
  var low = 0 , high = Arr.length - 1, mid;
  while (low <= high){
    mid = Math.floor((low+high)/2);
    if(Arr[mid][0]==value) return Arr[mid][2]; 
    else if (Arr[mid] < value) low = mid + 1;
    else high = mid - 1;
  }
  return 5;
}

function findLayerByIndicatorId(currentLayers, indicatorId) {
  let layerArray = currentLayers.getArray();
  for(let i = 0; i < layerArray.length; i++) {
    if (layerArray[i].get('indicatorId') === indicatorId) {
      return currentLayers.item(i);
    }
  }
  return null;
}

export function handleMapMoved(e) {
  //console.log("Map moveend event callback");
  let view = this.map.getView();
  let extent = view.calculateExtent(this.map.getSize());
  let northwest = proj.toLonLat([extent[0], extent[3]]);
  let southeast = proj.toLonLat([extent[2], extent[1]]);
  //console.log(proj.toLonLat(northwest));
  //console.log(proj.toLonLat(southeast));
  this.setState({northwest, southeast });
  return true;
}

export function getMapCenterAndZoom() {
  let view = this.map.getView();
  let extent = view.calculateExtent(this.map.getSize());
  let center = view.getCenter();
  //let proj = view.getProjection();
  let zoom = Math.round(view.getZoom());
  let resolution = view.getResolutionForZoom(zoom); // get resolution for a zoom level - to limit the zoom-out on indicator layers
  //view.centerOn(center); // move map to new center
  console.log("proj:", proj);
  console.log("proj.toLonLat:", proj.toLonLat);
  let northwest = proj.toLonLat([extent[0], extent[3]]);
  let southeast = proj.toLonLat([extent[2], extent[1]]);
  let centerLonLat = proj.toLonLat(center);
  console.log("centerLonLat: ", centerLonLat);
  console.log("zoom: ", zoom);
  console.log("resolution:", resolution);
  return {centerLonLat, zoom};
}

export function getMapPdf() {
  // TODO: build PDF file with map image and text below
  console.log("getMapPdf");
}

export function getMapPng() {
  console.log("getMapPng");
  this.map.once('rendercomplete', function(event) {
    console.log("map rendered, starting png build");
    var canvas = event.context.canvas;
    if (navigator.msSaveBlob) {
      navigator.msSaveBlob(canvas.msToBlob(), 'map.png');
    } else {
      canvas.toBlob(function(blob) {
        window.saveAs(blob, 'map.png');
      });
    }
  });
  this.map.renderSync();
}
        
export function handleMapLayerGeographyChanged(oldIndicatorId, newIndicatorId, 
    newSummaryLevelCode) {
      // console.log("handleMapLayerGeographicCalledFromOrigin")
  let currentLayers = this.map.getLayers();
  let updatedLayer = findLayerByIndicatorId(currentLayers, oldIndicatorId);
  // TODO: replace source and style function for layer to match newIndicatorId
  if(updatedLayer != null) {
    updatedLayer.set('indicatorId', newIndicatorId);
    updatedLayer.setStyle(styleFunction.bind(this, newIndicatorId));
    let newSource = new VectorTileSource({
        format: new ol.format.MVT(),
        url: "https://demo.broadstreet.io/bsdata/basetiles/" + newSummaryLevelCode + "/{z}/{x}/{y}.pbf"
      });
    updatedLayer.setSource(newSource);
  }
}

export function handleMapLayerOpacityChanged(indicatorId, opacity) {
  let currentLayers = this.map.getLayers();
  let updatedLayer = findLayerByIndicatorId(currentLayers, indicatorId);
  if(updatedLayer != null) {
    updatedLayer.setOpacity(opacity);
  }
}

export function handleMapLayerPositionChanged(indicatorId, index) {
  let currentLayers = this.map.getLayers();
  let updatedLayer = findLayerByIndicatorId(currentLayers, indicatorId);
  if(updatedLayer != null) {
    updatedLayer.setZIndex(98 - index);
  }
}

export function handleMapLayerRemoved(indicatorId) {
  let currentLayers = this.map.getLayers();
  let layerArray = currentLayers.getArray();
  for(let i = 0; i < layerArray.length; i++) {
    if (layerArray[i].get('indicatorId') === indicatorId) {
      return currentLayers.removeAt(i);
    }
  }
  return null;
}

export function handleMapLayerVisibilityChanged(indicatorId, visibility) {
  let currentLayers = this.map.getLayers();
  let updatedLayer = findLayerByIndicatorId(currentLayers, indicatorId);
  if(updatedLayer != null) {
    updatedLayer.setVisible(visibility === true);
  }
}

export function handleMapRenderComplete(e) {
  //console.log("handleMapRenderComplete");
  //console.log(e);
  if(!this.state.mapInitialized) {
    let currentLayers = this.map.getLayers();
    let baseTileLayer0 = currentLayers.item(0);
    let baseTileLayer1 = currentLayers.item(1);
    if(baseTileLayer0 != null && baseTileLayer1 != null && baseTileLayer0.get('mapbox-layers') != null)
    {
      this.setState({ mapInitialized: true }, (state) => { this.setupBaseMapLayers() });
    }
  }
  //let baseTileLayer = this.map.getLayers().item(0);
  //let baseTextLayer = this.map.getLayers().item(1);
  //console.log("baseTileLayer: " + (baseTileLayer!=null ? "yes" : "no"));
  //console.log("baseTextLayer: " + (baseTextLayer!=null ? "yes" : "no"));
}

// retrieve data for indicator and refresh map layer when done
export async function loadIndicatorData(indicatorId, data_quadrant) {
  if(this.indicatorData[indicatorId] == null)
  {
    this.indicatorData[indicatorId] = [ null, null, null, null ];
  }
  if(this.indicatorData[indicatorId][data_quadrant] == null)
  {
    this.indicatorData[indicatorId][data_quadrant] = 1;
    this.indicatorData[indicatorId][data_quadrant] = 
      await fetchIndicatorData(indicatorId, data_quadrant);
    //console.log(this.indicatorData[indicatorId][data_quadrant]);
    this.refreshMapLayerSource(indicatorId);
    return true;
  }
  // data was previously requested
  return false;
}

// assign Z-Index to base map layers after they load from MapTiler
// TODO: force refresh of rendered shapes for map layer after data loaded
export function refreshMapLayerSource(indicatorId) {
  let currentLayers = this.map.getLayers();
  let updatedLayer = findLayerByIndicatorId(currentLayers, indicatorId);
  if(updatedLayer != null) {
  //console.log("refreshMapLayerSource for indicatorId: " + updatedLayer.get('indicatorId'));
    updatedLayer.getSource().refresh();
  }
}

export function renderMap() {
  if(this.map != null) { 
    //this.updateMapLayer(this.testIndicator);
    return; 
  }
  this.map = new Map({
    interactions: defaultInteractions({
      constrainResolution: true, onFocusOnly: true
    }),
    target: 'map', // div with id='map' required
    controls: defaultControls({
      zoom: false,
      attributionOptions: {
        collapsible: false
      }
    }),
    view: new View({
      maxZoom:20,
      minZoom:4,
      projection: 'EPSG:3857',
      center: proj.fromLonLat([-88, 43]),
      zoom: 10
    })
  });
    
  // load bottom layer of map base tiles using MapTiler MapBox style file
  var olms = window.olms;
  olms.apply(this.map, 'https://maps.tilehosting.com/c/e14435c9-97bb-4377-bdea-16629b14750b/styles/positronnotext/style.json?key=92mrAH6NBXO3jvPRMmT9');
  // load top layer of text labels 
  olms.apply(this.map, 'https://maps.tilehosting.com/c/e14435c9-97bb-4377-bdea-16629b14750b/styles/basicadvtest/style.json?key=92mrAH6NBXO3jvPRMmT9');
  this.map.on("moveend", this.handleMapMoved);
  this.map.on("postrender", this.handleMapRenderComplete);
}

export function setupBaseMapLayers() {
  let currentLayers = this.map.getLayers();
  let baseTileLayer0 = currentLayers.item(0);
  let baseTileLayer1 = currentLayers.item(1);
  if(baseTileLayer0 != null && baseTileLayer1 != null && baseTileLayer0.get('mapbox-layers') != null)
  {
    // layer with only text labels has only a few child layers
    if(baseTileLayer0.get('mapbox-layers').length < 10)
    {
      // put text labels layer on top of everything
      baseTileLayer0.setZIndex(100);
      baseTileLayer0.set("indicatorId", "basetext");
      // put base map tiles layer under everything
      baseTileLayer1.setZIndex(0);
      baseTileLayer1.set("indicatorId", "basetiles");
    }
    else
    {
      // put text labels layer on top of everything
      baseTileLayer1.setZIndex(100);
      baseTileLayer1.set("indicatorId", "basetext");
      // put base map tiles layer under everything
      baseTileLayer0.setZIndex(0);
      baseTileLayer0.set("indicatorId", "basetiles");
    }
  }
}

/* update one ordered layer of the map with new data */
// TODO: check for total number of vector layers vs total props.indicators
const MAX_ALLOWED_MAP_LAYERS = 10;
export function updateMapLayer(item, refresh = false) {
  // console.log("updateMapLayer-------");
  if(!this.state.mapInitialized) {
    //console.log("map not initialized, nothing to do");
    return;
  }
  let currentLayers = this.map.getLayers();
  let currentLayersCount = currentLayers.getLength();
  // get the layer we've been told to update
  let updatedLayer = findLayerByIndicatorId(currentLayers, item.indicatorId);

  // layer zero is tile layer, layer 1 is text overlay, indicator layer index zero is current map layer 2
  if(updatedLayer == null && currentLayersCount > 1 
    && currentLayersCount < MAX_ALLOWED_MAP_LAYERS + 2) {
    // create any layer that doesn't yet exist
    // Z-Index of layers at top of list is highest
    let newLayer = new VectorTileLayer({
      source: new VectorTileSource({
        format: new ol.format.MVT(),
        url: "https://demo.broadstreet.io/bsdata/basetiles/" + item.summaryLevelCode + "/{z}/{x}/{y}.pbf"
      }),
      renderMode: 'image',
      style: styleFunction.bind(this, item.indicatorId),
      zIndex: 98 - item.index,
      indicatorId: item.indicatorId
    })
    currentLayers.push(newLayer);
    updatedLayer = newLayer;
  }
  else {
    //console.log("maximum map layers exceeded");
  }
  if (updatedLayer == null) {
    return;
  }
    
  // adjust layer Z-Index opacity and visibility
  if(98 - item.index != updatedLayer.getZIndex()) {
    updatedLayer.setZIndex(98 - item.index);
  }
  if(item.opacity != null) {
    updatedLayer.setOpacity(item.opacity);
  }
  if(item.visible !== true) {
    updatedLayer.setVisible(false);
    //console.log("updatedLayer hidden");
  } 
  else {
    updatedLayer.setVisible(true);
  }

  // force refresh of data for layer if requested
  if (refresh) {
    updatedLayer.getSource().refresh();
  }
  console.log('updateMapLayercalled')
}
