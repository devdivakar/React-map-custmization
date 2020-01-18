import React from 'react';
import MapComponent from '../MapComponent/Map';
import {QueryRenderer , graphql} from 'react-relay';
import environment from '../../RelayEnvironment';
import {MapLayers, Layer} from '../MapLayers/MapLayers';
class RouterComponent extends React.Component {
    constructor(props) {
        super(props);
        // console.log("routerprops",props.indicatorIdArray )     
        this.state = {
            isDataInfoPopupVisible:false,
            isMapComponentHidden:true}
        } 

       
    handleCloseDataInfoPopup = () => {
        this.setState({isDataInfoPopupVisible:false});
    }
    
    DataInfoPopupHandler = () => {
        if (this.state.isDataInfoPopupVisible === true) {
            this.setState({isDataInfoPopupVisible:false});
        }
        else
            this.setState({ isDataInfoPopupVisible:true});
    }

    render() {
      return <div>
        <MapLayers indicatordata = {null}
                            indicatorid = {null}
                             {...this.props}
                            handleSelectIndicator={this.props.handleSelectIndicator}
                            routeIndicatorId = {this.props.routeIndicatorId}
                            isDataInfoPopupVisible={this.state.isDataInfoPopupVisible}
                            onCloseDataInfoPopup={this.handleCloseDataInfoPopup}
                            handleMapLayerGeographyChanged = {this.props.handleMapLayerGeographyChanged}
                            >
        {
          this.props.indicatorIdArray.map((node,i) => {
            if(node == null) { return null; }
            return <QueryRenderer key={node}
                        environment={environment}
                        query={graphql`
                        query  RouterComponentQuery($input:  MapLayerInput!)  {
                            indicatorMapLayer(layer:  $input)  {
                                indicators  {
                                          edges  {
                                          node  {  
                                            id                    
                                            indicatorName                      
                                            year                      
                                            geographicUnit                      
                                            {                          
                                              summaryLevelCode                      
                                            }                      
                                            dataDictionaryVariable  {                          
                                              baseMultiplier                          
                                              isLargerBetter                          
                                              showDecimalPlaces                          
                                              unitOfMeasure                          
                                              searchableindicatorSet                          
                                              {                              
                                                edges                              
                                                {                                  
                                                  node                                  
                                                  {  
                                                    id
                                                    geographicUnit  {                                          
                                                      name                                          
                                                      summaryLevelCode                                      
                                                    }                                  
                                                  }                              
                                                }                          
                                              }                      
                                            }                      
                                            mapLegend  {                          
                                              edges  {                              
                                                node  {                                  
                                                  quantile                                  
                                                  legendText                              
                                                }                          
                                              }                      
                                            }                  
                                          }              
                                        }  
                                      }  
                                    }  
                                  }  
       
        
                      `}

                    variables={{  "input":  {  "indicators": [node]  }  } }
                        render={({error, props}) => {
                        if (error) {
                            console.error(error);
                            return <div>Error!</div>;
                        }
                        if (!props){
                            return <div key={node}/>
                        }
                        // console.log("id array------->",JSON.stringify(props))
                        if(props.indicatorMapLayer.indicators != null) {
                            let indicatorid = props.indicatorMapLayer.indicators.edges[0].node.id;
                            return <Layer key={indicatorid} indicatordata = {props}
                            indicatorid = {indicatorid}
                             {...this.props}
                            handleSelectIndicator={this.props.handleSelectIndicator}
                            routeIndicatorId = {this.props.routeIndicatorId}
                            onDataInfoPopup={this.DataInfoPopupHandler}
                            handleMapLayerGeographyChanged = {this.props.handleMapLayerGeographyChanged}
                            />
                        } else {
                          return <div key={node}/>;
                        }
                           
                           
                           
                         
            }}/>  
        })}
        </MapLayers>
      </div>
    }
      
         
       

}

  
export default RouterComponent;
