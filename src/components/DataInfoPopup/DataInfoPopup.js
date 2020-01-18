import React from 'react';
import '../../css/mapstyle.css';
import {QueryRenderer , graphql} from 'react-relay'
import environment from '../../RelayEnvironment'

class DataInfoPopup extends React.Component {
    constructor(props) {
        super(props);        
      }

    render() {
       
      return <div className = 'map-rightside datainfo'>
      <div className="map-sgare">
      <h1 className="sharemap">DATA INFO</h1>
        <div className="map-info-list scroll-design">

<QueryRenderer
    environment={environment}
    query={graphql`
    query  DataInfoPopupQuery($input:  ID!)  {
          searchableIndicator(id:  $input)  {
                dataInfoText  
            }  
        }
`}
variables={{  "input":  "U2VhcmNoYWJsZUluZGljYXRvck5vZGU6Mw=="  }  }
    render={({error, props}) => {
    if (error) {
        console.error(error);
        return <div>Error!</div>;
    }
    if (!props){
        return <div/>
    }
     console.log("datainfo json------->",JSON.stringify(props))
            return (
            
         <div>
             <div className="wrap">
                <strong>Indicator Name</strong>
                <span>Median Family Income</span>
            </div>
            <div className="wrap">
                <strong>Data Source</strong>
                <span>The  American Community Survey 5-year Eastimates</span>
            </div>
            <div className="wrap">
                <strong>Data  years</strong>
                <span>2012 - 2016</span>
            </div>
             <div className="wrap">
                <strong>Indicator Name</strong>
                <span>{props.searchableIndicator.dataInfoText}</span>
            </div>
            <div className="wrap">
                <strong>Data Source</strong>
                <span>The  American Community Survey 5-year Eastimates</span>
            </div>
            <div className="wrap">
                <strong>Data  years</strong>
                <span>2012 - 2016</span>
            </div>
              
      </div>
    )}}/>
       
        </div>
      </div>
      <div className="ftr-share-area">
      <div className="ftr-buttons share-btn"><span className="Save-btn" onClick={this.props.closeDataInfoPopup}>Close</span></div>
      </div>
  </div>;
    }
  }

 export default DataInfoPopup;
