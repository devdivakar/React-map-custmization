import React from 'react';
import '../../css/mapstyle.css';
import WithCallbacks from '../ReactSelectAsync/ReactSelectAsync';
import SelectIndicator from '../SelectIndicators/SelectIndicator';
import SaveMapPopup from '../SaveMapPopup/SaveMapPopup';
import ShareMapPopup from '../ShareMapPopup/ShareMapPopup';
import DataInfoPopup from '../DataInfoPopup/DataInfoPopup';
import InputSlider from '../InputSlider/InputSlider';
import RouterComponent from '../RouterComponent/RouterComponent';




class Colorpalettes extends React.Component{
  constructor(props){
  super(props);
}
PopulateColors = () =>{
    var nodes = this.props.nodes
    // console.log("nodes", nodes)
    switch(nodes) {
      case 0:
         return "clor-box c-0"
          break;
      case 1:
         return "clor-box c-1"
          break;
      case 2:
         return "clor-box c-2"
      break;
      case 3:
         return "clor-box c-3"
      break;
      case 4:
         return "clor-box c-4"
      break;
      case 5:
         return "clor-box c-5"
      break;
      case 6:
          return "clor-box c-6"
      break;
      default:
          return "clor-box c-7"
  }
}

 
  render(){
    return(
      
      <span className={this.PopulateColors()}></span>
      
    )
  }
  
}



class Cross extends React.Component{
  constructor(props){
  super(props);
}
removeLayerCaller = () =>{
    var nodes = this.props.nodes
    this.props.removeLayer(nodes)   
//    this.props.routeIndicatorId()
}

 
  render(){
    return(

      <span className="map-slct-icon">
      <img onClick={this.removeLayerCaller} src={require('../../images/tagCross.svg')}/>
  </span>
    )
  }
  
}

class Checkbox extends React.Component{
  constructor(props){
  super(props);
}
UpdateMapCaller = () =>{
    var nodes = this.props.nodes
    this.props.updateMapCaller(nodes)}
 
  
  render(){
    return(

<input type="checkbox" id= {this.props.id} onClick={this.UpdateMapCaller}/>
    )
  }
  
}

class Geog extends React.Component{
  constructor(props){
  super(props);
  // console.log("Geog",props)
}




GetOptionValue = (e) => {
  // this.UpdhandleMapLayerGeographyChangedCaller(e.target.value)
  var innernode = JSON.parse(e.target.value)
console.log("value",innernode)
var updatefield = {
  oldIndicatorId : this.props.indicatorId,
  newIndicatorId : innernode.node.id,
  newSummaryLevelCode : innernode.node.geographicUnit.summaryLevelCode
}
this.props.handleMapLayerGeographyChanged(updatefield.oldIndicatorId ,updatefield.newIndicatorId, updatefield.newSummaryLevelCode )
console.log("updatefield",updatefield)
}



  render(){
    return(

<div className="county-box">
                      <span>Data Geog:</span>
                      <select className="select-dropdown" onChange={this.GetOptionValue} >
      
            {this.props.nodes.node.dataDictionaryVariable.searchableindicatorSet.edges.map((innernode, j) => (
                          <option key={j} value ={JSON.stringify(innernode)} >{innernode.node.geographicUnit.name}</option>
                        // <GeogInnerComponent  
                        // ref={this.child}
                        // name = {innernode.node.geographicUnit.name}
                        // id = {innernode.node.id}
                        // summaryLevelCode = {innernode.node.geographicUnit.summaryLevelCode}
                        // key = {j}
                        // handleMapLayerGeographyChanged={this.props.handleMapLayerGeographyChanged}
                        // />

              
                        ))}
                        
                        </select>
                      </div>
    )
  }
  
}

export class Layer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isIndicatorChecked: false,
      apidata:props.indicatordata,
      varIndicatorid : "",
      opacity: 1.0,
      isLayerVisible:true,
      visibleAttribute:true
     }
    // console.log("stateLayers",this.state.apidata)
  }

  handleOpacity = (opacity) =>{
    this.setState({opacity:opacity})
  }

  updateMapCaller = (indicatorData) => {

    if (this.state.visibleAttribute === true) {
      this.setState({visibleAttribute:false});
   }
   else
    this.setState({visibleAttribute:true});
    
    this.setState({isMaplayerCheckBoxesVisible:true})
    let newIndicatorId = this.setState({varIndicatorid:indicatorData.node.id})
    
    var updatemapfields ={ indicatorId: indicatorData.node.id, 
                        summaryLevelCode: indicatorData.node.geographicUnit.summaryLevelCode, 
                        visible: this.state.visibleAttribute, 
                        index: 0, 
                        opacity: this.state.opacity }
            // console.log("updatemapfields",updatemapfields)
  
          this.props.onMapLayerUpdate(updatemapfields)
          return newIndicatorId
}



  removeLayer = (indicatorData) => {
    // console.log("removeLayer   ----> " , JSON.stringify(indicatorData))
    var indicatorid = indicatorData.node.id
    // console.log(indicatorData.node.id);
    this.props.routeIndicatorId(indicatorid)
    //this.jsonParserCallback(indicatorid)
    // console.log("handleMapLayerRemovedCalled",indicatorData)
  }

  jsonParserCallback = (indicatorid) =>{
      // state data will be updated through id of jsonParserCallback
      var oldJSON = this.props.indicatordata
          //console.log("oldJSON",JSON.stringify(oldJSON))

   
      var newJSON = JSON.parse(JSON.stringify(oldJSON))
      // console.log("old array------>",newJSON.indicatorMapLayer.indicators.edges)
      var index = -1
      newJSON.indicatorMapLayer.indicators.edges.map((node, i) => {
              //console.log("printing array element -----> ", (node.node.id))
              if (indicatorid === node.node.id){
                console.log("index",i)
                index = i
                
                //return index
              }
            })
           // console.log("newjson",JSON.stringify(newJSON))

      

    newJSON.indicatorMapLayer.indicators.edges.splice(index,1)
        //console.log("splitedJSON",JSON.stringify(newJSON))
        // console.log("state",JSON.stringify(oldJSON))
        // console.log("new array------>", newJSON.indicatorMapLayer.indicators.edges)
        this.setState({indicatordata:newJSON} , () => console.log("new state is ---> ", this.state.indicatordata));
      //console.log("stateChanged",JSON.stringify(oldJSON))
     }
    
  render(){
    return(
      
        
     <div className="mapstyle-api">
      <form className="map-hidefilter add-new-data">
      <div className="checkbox-new-list">
      <div/>

          <div className="add-map-wrapper">
                    { this.props.indicatordata != null && 
                      this.props.indicatordata.indicatorMapLayer.indicators.edges.map((nodes, i) => {
                      
                        return(
                         <div className="form-group" key={i}>
        
                     <div className="map-sel-title">
                     
                     <Checkbox updateMapCaller = {this.updateMapCaller} nodes ={nodes} id = {nodes.node.indicatorName}/>
                      <label htmlFor={nodes.node.indicatorName}>                    
                      </label>
                      <span className="map-add-chat-txt" onClick={this.props.onDataInfoPopup}>
                          {nodes.node.indicatorName}
                          <strong className="open-info-poup">
                              <img src={require('../../images/iconInfo.svg')}/>
                          </strong>
                      
                    </span>                 
                   
                   <Cross removeLayer = {this.removeLayer} nodes={nodes} routeIndicatorId = {this.props.routeIndicatorId}/>
                   </div>
                  <div className="open-list-checkbox">
                  <ul>
                  {nodes.node.mapLegend.edges.map((nodes, i) => (
                    <li key={i}>
                       <Colorpalettes nodes={nodes.node.quantile}/> {nodes.node.legendText}
                      </li>
                 
                    ))}
                  </ul>                 
                      <Geog 
                     handleMapLayerGeographyChanged = {this.props.handleMapLayerGeographyChanged}
                      nodes ={nodes}
                      indicatorId={nodes.node.id}
                      />


                      <div className="county-box">
                      <span className="transparency-text">Transparency:</span> <InputSlider onMapLayerOpacityChanged={this.props.onMapLayerOpacityChanged} indicatorId={nodes.node.id} handleOpacity = {this.handleOpacity} className='select-dropdown' />
                      </div>
                    </div>
                        </div> )

                    })}
                  
                  
            </div>                     
        </div>
        </form> 
        </div>
)}}



export class MapLayers extends React.Component {
  constructor(props) {
    super(props);
    // console.log('maplayerprop',props)
    this.state = { isSavePopupVisible: false,
      isShareMapPopupVisible: false,
      isTooltipVisible: true,
      isMaplayerCheckBoxesVisible: false,
      indicatorid:"",
      indicatordata:props.indicatordata,
      }
     
 }

  onSavedata = () => {
    
    this.props.handleSelectIndicator()
    }
  SavePopupHandler = () => {
    this.setState({isTooltipVisible:false});
 
    if (this.state.isSavePopupVisible === true) {
      this.setState({isSavePopupVisible:false});
   }
   else
    this.setState({isSavePopupVisible:true,isShareMapPopupVisible:false}, () => {this.props.onCloseDataInfoPopup()});
   }
  ShareMapPopupHandler = () => {
   
    this.setState({isTooltipVisible:false});
    if (this.state.isShareMapPopupVisible === true) {
      this.setState({isShareMapPopupVisible:false});
   }
   else
    this.setState({isSavePopupVisible:false , isShareMapPopupVisible:true}, () => {this.props.onCloseDataInfoPopup()});
  }
  
  ToggleMaplayerCheckBoxes = () => {
   
   if (this.state.isMaplayerCheckBoxesVisible === true) {
      this.setState({isMaplayerCheckBoxesVisible:false});
   }
   else
    this.setState({isMaplayerCheckBoxesVisible:true});
  }

  handleCloseMapPopup = () => {
    
    this.setState({isSavePopupVisible:false});
   
  }
  closeShareMapPopup = () => {
    
    this.setState({isShareMapPopupVisible:false});
   
  }

  

  handleSaveMapPopup = () => {
    if(this.state.isSavePopupVisible===true && this.props.globallyVisible===true){
      

    return <SaveMapPopup {...this.props} handleCloseMapPopup={this.handleCloseMapPopup}/>
  
    }
    else{
      
      return <div></div>
    }
   
 }
 handleShareMapPopup = () => {
  if(this.state.isShareMapPopupVisible===true && this.props.globallyVisible===true){

  return <ShareMapPopup {...this.props} closeShareMapPopup = {this.closeShareMapPopup} handleShareMapPopup={this.handleShareMapPopup} /> 

  }
  else{
    
    return <div></div>
  }
 
}


closeDataInfoPopup = () => {
  this.props.onCloseDataInfoPopup();
}

handleDataInfoPopup = () => {
  if(this.props.isDataInfoPopupVisible===true && this.props.globallyVisible===true){

  return <DataInfoPopup {...this.props} closeDataInfoPopup ={this.closeDataInfoPopup}/>

  }
  else{
    
    return <div></div>
  }
 
}

hidetooltip = () => {
  this.setState({isTooltipVisible:false});
}

showtooltip = () => {
  this.setState({isTooltipVisible:true});
}





   
    render() {
      return (
    <div className="map-popup-wraper">
       <div className="map-search-wrapper">
          <div className="serch-map-style-section">
              <div className="map-style-top">
                  <span className="map-list-title">Map Layers</span>
                  <div className="srch-list-add-wrap" onClick={this.onSavedata}><span className="srch-list-add-icon"></span><span className="srch-list-add-txt" >Add Data</span></div>               
              </div>
              {this.props.children}
              
        <div className="map-selecSaveMapPopupt-wrap">
            <span className="mapstyle">Map Style<img className="text-right" src={require('../../images/caretDown.svg')} onClick={this.ToggleMaplayerCheckBoxes}/></span>          
        </div>            
 


{this.state.isMaplayerCheckBoxesVisible===true ?
                  <div className="mapstyle-checkbox scroll-design">
                  <form className="map-hidefilter">
                  <div className="form-group">
                         <input type="checkbox" id="HighWays" />
                          <label htmlFor="HighWays">HighWays</label>

                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="Boundaries" />
                          <label htmlFor="Boundaries">State Boundaries</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="Countyb" />
                          <label htmlFor="Countyb">County Boundaries</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="PlaceNames" />
                          <label htmlFor="PlaceNames">Place Names</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="PlaceBoundaries" />
                          <label htmlFor="PlaceBoundaries">Place Boundaries</label>
                      </div>    
                      <div className="form-group">
                         <input type="checkbox" id="SchoolDistrict" />
                          <label htmlFor="SchoolDistrict">School Districts(Secondary)</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="SchoolElementry" />
                          <label htmlFor="SchoolElementry">School Districts(Elementry)</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="ZIPCode" />
                          <label htmlFor="ZIPCode">ZIP Code(2CTA) Boundaries</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="Water" />
                          <label htmlFor="Water">Water</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="TopographicMap" />
                          <label htmlFor="TopographicMap">Topographic Map</label>
                      </div>
                      <div className="form-group">
                         <input type="checkbox" id="Satelite" />
                          <label htmlFor="Satelite">Satelite</label>
                      </div>
                  </form>
              </div> : null }
             

 <div>
          <div className="empty-space"></div>
            <div className="map-style-bottom">
                <span className="tooltip-custom">
                  <button className="map-btn-save onhover-tooltip" onClick={this.SavePopupHandler} onMouseOver={this.showtooltip} onMouseOut={this.hidetooltip}>SAVE</button>
                  {this.state.isTooltipVisible === true ? <span className="show-tooltip-custom">Save This Map</span> : null }
                </span>
                <span className="tooltip-custom">
                  <span className="map-icon-load onhover-tooltip" onClick={this.ShareMapPopupHandler} onMouseOver={this.showtooltip} onMouseOut={this.hidetooltip}></span>
                  {this.state.isTooltipVisible === true ?<span className="show-tooltip-custom">Export Map</span> : null }
                </span>
            </div>
          </div>
      </div>
</div>
          
          {this.handleSaveMapPopup()}
          {this.handleShareMapPopup()}
          {this.handleDataInfoPopup()}
          </div>
        
      )
      

    }
  }





  
 