import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MapComponent from '../MapComponent/Map';
import {MenuContainer} from '../../modules/broadstreet-ui-lib';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import shapeStyles from '../../modules/openlayers/shapeStyles.js';
import * as mapFunctions from '../../modules/openlayers/mapFunctions.js';

class ProjectBoardRoot extends Component {
  constructor(props){
      super(props);
      this.testIndicator = { indicatorId: "U2VhcmNoYWJsZUluZGljYXRvck5vZGU6NDE=", summaryLevelCode: "860", "visible": true, "index": 0, "opacity": 1.0 };
      this.state = {
        isLeftMenuOpen: false,
        refreshLayout: false,
        selectedBoardId: null,
        globallyVisible:true,
        mapInitialized: false,
        mapLayers: [this.testIndicator, null, null, null, null, null, null, null, null, null],
        northwest: [0,0], 
        southeast: [0,0], 
      }
      this.map = null;
      this.indicatorData = { };
      this.shapeStyles = shapeStyles;
      
      this.bsearch = mapFunctions.bsearch.bind(this);
      this.handleMapMoved = mapFunctions.handleMapMoved.bind(this);
      this.handleMapLayerGeographyChanged = mapFunctions.handleMapLayerGeographyChanged.bind(this);
      this.handleMapLayerOpacityChanged = mapFunctions.handleMapLayerOpacityChanged.bind(this);
      this.handleMapLayerPositionChanged = mapFunctions.handleMapLayerPositionChanged.bind(this);
      this.handleMapLayerRemoved = mapFunctions.handleMapLayerRemoved.bind(this);
      this.handleMapLayerVisibilityChanged = mapFunctions.handleMapLayerVisibilityChanged.bind(this);
      this.handleMapRenderComplete = mapFunctions.handleMapRenderComplete.bind(this);
      this.loadIndicatorData = mapFunctions.loadIndicatorData.bind(this);
      this.refreshMapLayerSource = mapFunctions.refreshMapLayerSource.bind(this);
      this.renderMap = mapFunctions.renderMap.bind(this);
      this.setupBaseMapLayers = mapFunctions.setupBaseMapLayers.bind(this);
      this.updateMapLayer = mapFunctions.updateMapLayer.bind(this);
      this.getMapCenterAndZoom = mapFunctions.getMapCenterAndZoom.bind(this);
      this.getMapPng = mapFunctions.getMapPng.bind(this);
      this.getMapPdf = mapFunctions.getMapPdf.bind(this);
  }

  componentDidMount(){
    /* link OpenLayers map to component after first render to the DOM */
    this.renderMap();
  }

  componentDidUpdate(){
    this.renderMap();
  }

  hideCarret = () => {
    
    console.log("hideCarret is called")
    if (this.state.globallyVisible === true) {
      this.setState({globallyVisible:false});
   }
   else
    this.setState({globallyVisible:true});
  }


  onToggleLeftMenu = (isLeftMenuOpen) => {
    this.setState({isLeftMenuOpen: isLeftMenuOpen, refreshLayout: true});
  }
  
  onRefreshLayout = () => {
    this.setState({refreshLayout: false});
  }

  handleBoardSelection = (id) => {
    this.setState(
      {selectedBoardId : id}
    )
  }

  handleDownloadMap = (downloadType) => {
    if(downloadType === "PNG") {
      this.getMapPng();
    }
    else {
      this.getMapPdf();
    }
  }
  
  render() {
    return (
      <MenuContainer  handleBoardSelection={this.handleBoardSelection} hideCarret={this.hideCarret}>
         <MapComponent globallyVisible={this.state.globallyVisible} hideCarret={this.hideCarret}
          onMapLayerOpacityChanged={this.handleMapLayerOpacityChanged} 
          onMapLayerUpdate={this.updateMapLayer} 
          handleMapLayerRemoved = {this.handleMapLayerRemoved}
          handleMapLayerGeographyChanged = {this.handleMapLayerGeographyChanged}
          handleMapLayerPositionChanged = {this.handleMapLayerPositionChanged}
          onDownloadMap={this.handleDownloadMap}
          />
      </MenuContainer>
    );
  }
}

class Root extends Component{
  render(){
    return (            
            <Router basename='/'>
            <div>               
               <Switch>
                  <Route exact path='/' component={ProjectBoardRoot}/>
               </Switch>
            </div>
         </Router>
    );
  }
}

/*
export default GoogleApiWrapper({
  apiKey: ("AIzaSyAhG0MxYGxWRvL4aO5VDABYZ_Xohlp9kMg")
})(Root)
*/
export default Root;