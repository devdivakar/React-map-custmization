/* TODO: this should be a list of color palettes for indicator map layers, not just one palette */
var ol = window.ol;
var Style = ol.style.Style;
var Fill = ol.style.Fill;
var Stroke = ol.style.Stroke;

var shapeStyles = [[
  new Style({
      
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
      }),
      fill: new Fill({
          color: 'rgba(160, 160, 160, 1.0)'
      })
  }),
  new Style({
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
      }),
      fill: new Fill({
          color: 'rgba(246, 196, 199, 1.0)'
      })
    }),
  new Style({
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
      }),
      fill: new Fill({
          color: 'rgba(243, 143, 182, 1.0)'
      })
    }),
  new Style({
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
          }),
      fill: new Fill({
          color: 'rgba(208, 91, 166, 1.0)'
      })
    }),
  new Style({
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
      }),
      fill: new Fill({
          color: 'rgba(155, 75, 152, 1.0)'
      })
    }),
  new Style({
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
      }),
      fill: new Fill({
          color: 'rgba(55, 255, 55, 1.0)'
      })
    }),
  new Style({
      stroke: new Stroke({
          color: '#7B3B78',
          width: 0.2
      })
    })    
]];

export default shapeStyles