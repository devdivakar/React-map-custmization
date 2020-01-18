import React , {Component}from 'react';
import '../../css/mapstyle.css';
import MyAreaDropdown from '../MyAreaDropdown/MyAreaDropdown';
import SelectIndicator from '../SelectIndicators/SelectIndicator';
import MapLayers from '../MapLayers/MapLayers';
import SelectAreaDropdown from '../SelectAreaDropdown/SelectAreaDropdown';
//import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import RouterComponent from '../RouterComponent/RouterComponent';
 class MapComponent extends Component {
  constructor(props) {
    super(props);
      this.state = { 
      isSelectIndicatorVisible: false,
      isMapLayersVisible: false,
      isTooltipVisible: true,
      indicatorIdArray:[],
      isPanelHidden: false
    }            
  }
  
  handlemaplayers = (selectedValue) => {
    this.setState({isMapLayersVisible:true});
  }

  handleSelectIndicator = () => {
    this.setState({isSelectIndicatorVisible:true});
  }
  closeSelectIndicator = () => {
    this.setState({isSelectIndicatorVisible:false});
  }

  handleMyAreaDropdown = () => {
     if(this.props.globallyVisible===true){
        return <MyAreaDropdown  {...this.props} isMapLayersVisible={this.state.isMapLayersVisible} handlemaplayers={this.handlemaplayers}/>
     }
     else{
        return <div></div>
     }
    
  }
  handleMapLayers = () => {
    if(this.state.isMapLayersVisible===true && this.props.globallyVisible===true){
      return <RouterComponent routeIndicatorId = {this.routeIndicatorId} indicatorid = {this.props.indicatorid} {...this.props}  handleSelectIndicator={this.handleSelectIndicator} handleMapLayerGeographyChanged = {this.props.handleMapLayerGeographyChanged} indicatorIdArray={this.state.indicatorIdArray}/>
    }
    else{
      return <div></div>
    }
 }
 handleSelectIndicator1 = () => {
    if(this.state.isSelectIndicatorVisible===true && this.props.globallyVisible===true){
      return <SelectIndicator {...this.props} closeSelectIndicator={this.closeSelectIndicator} routeIndicatorId={this.routeIndicatorId}/>
    }
    else{
      return <div></div>
    }
}
CallhideCarret = () => {
  this.props.hideCarret()
  this.setState((prevState) => {return {isTooltipVisible:false, isPanelHidden: !prevState.isPanelHidden}});
  
}
hidetooltip = () => {
  this.setState({isTooltipVisible:false});
}
showtooltip = () => {
  this.setState({isTooltipVisible:true});
}
routeIndicatorId = (indicatorid) =>{
  
  var oldstate = this.state.indicatorIdArray
  var mutablecopy = oldstate.slice(0)
  // console.log("intial value of the indicatorIdArray",this.state.indicatorIdArray) 
  if  (mutablecopy.includes(indicatorid)===true){
    // console.log("remove indicator ", indicatorid);
    var position = mutablecopy.indexOf(indicatorid)
    mutablecopy.splice(position,1)
    this.setState({indicatorIdArray:mutablecopy});
    this.props.handleMapLayerRemoved(indicatorid);
    }
  else{
    // console.log("add indicator ", indicatorid);
    var newArray = mutablecopy.concat(indicatorid)
    this.setState({indicatorIdArray:newArray});
  }
}

  
   render(){
      return( 
          <div className="test">
              <div className="map-wrapper" style={{height: window.innerHeight}}>
                <div id="map" tabIndex="1" style={{position: "absolute", top:"0px", height: "90%", width: "100%", "backgroundColor":"#000000"}}>
                </div>
              <div>
              <SelectAreaDropdown />
             
              </div>
              <div className="map-contener">
              <div className="map-title-wrap">
              <span className="tooltip-custom">
                <h4 className="onhover-tooltip">Map Room <span onClick={this.CallhideCarret }  onMouseOver={this.showtooltip} onMouseOut={this.hidetooltip}></span></h4>
                {this.state.isTooltipVisible=== true ? (this.state.isPanelHidden ? <span className="show-tooltip-custom">Show Panel</span> : <span className="show-tooltip-custom">Hide Panel</span>):null}
              </span>
              </div>
             
                  {this.handleSelectIndicator1()}





                  

              <div className="map-contener-search-wrap">
                            {this.handleMyAreaDropdown()}
                            {this.handleMapLayers()}
                  </div> 
                </div>
                <span className="map-icon new"></span>
                </div>
          </div>
      )
    }
  }
  
export default MapComponent;









