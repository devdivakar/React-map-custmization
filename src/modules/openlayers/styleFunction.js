var styleFunction = function(indicatorId, feature) {
  //console.log("styleFunction called");
  //console.log(indicator);
  //console.log(feature);
  var quantile = null;
  //let quantile = feature.getProperties().quartile;
  let geo_id = feature.getProperties().geo_id;
  // feature properties to determine subset of data we want
  let data_quadrant = feature.getProperties().data_quadrant;
  //console.log(quantile);
  let featureType = feature.getGeometry().getType();
  //console.log(featureType);
  if(featureType === "Polygon" || featureType === "MultiPolygon") {
    // check if data needed was loaded or is loading
    if(this.indicatorData[indicatorId] == null || 
      this.indicatorData[indicatorId][data_quadrant] == null) {
      this.loadIndicatorData(indicatorId, data_quadrant);
    }
    else if(this.indicatorData[indicatorId][data_quadrant] === 1) {
      return this.shapeStyles[0][6];
    }
    else {
      quantile = this.bsearch(this.indicatorData[indicatorId][data_quadrant], geo_id);
    }
    /*
    if(typeof geo_id !== 'undefined' && geo_id === "8600000US53226") {
        return this.shapeStyles[0][5];
    } */
    if(typeof quantile !== 'undefined' && quantile !== null) {
        //console.log(quantile);
        if(geo_id === "8600000US54923")
        {
          console.log(geo_id);
        //console.log(this.shapeStyles[0]);
          console.log(this.shapeStyles[0][quantile]);
        }
        return this.shapeStyles[0][quantile];
    } 
    else {
        return this.shapeStyles[0][0];
    }
  } else {
    return this.shapeStyles[0][0];
    //return styles[feature.getGeometry().getType()];
  }
};

export default styleFunction;