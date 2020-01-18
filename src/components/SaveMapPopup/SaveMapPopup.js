import React from 'react';
import {QueryRenderer , graphql} from 'react-relay'
import environment from '../../RelayEnvironment'
import '../../css/mapstyle.css';



class Boardname extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isSectionsVisible:false
        }
    
    
    }

handleSectionVisible = () => {

    if (this.state.isSectionsVisible === true) {
        this.setState({isSectionsVisible:false});
        console.log("Set state isSectionVisible: false")
    }
    else
    this.setState({isSectionsVisible:true});
    console.log("Set state isSectionVisible: true")
    }
    
    
    render(){
        return (
            <div>
            <div className="form-group"  onClick={this.handleSectionVisible}>
            <input type="checkbox" id={this.props.id} />
            <label htmlFor={this.props.id}>{this.props.boardName}<img className="down-arrow" src={require('../../images/caretDown.svg')} /></label>
           </div>
           {this.props.boardname.node.sections.edges.map((section, j) => (

            <div className="form-group" key={j}>
          {this.state.isSectionsVisible === true ?
                <Sections sectionName= {section.node.name}/>
                : null}
            </div>
))}
</div>
            
    )}}






class Sections extends React.Component {
constructor(props){
    super(props);


}


render(){
    return (
            
                
                <div>
                <input type="checkbox" id="section1" />
                <label htmlFor="section1">{this.props.sectionName}</label>
                </div>
                
            
       

)}}

class SaveMapPopup extends React.Component {
  constructor(props) {
    super(props);
}


  
  render() {
    return(
        <div className = 'map-rightside  savemap-popup'>
        <div className="map-sgare savemap">
        <span className="map-popup-close-btn">CLOSE</span>
        <h1 className="sharemap">Save Map</h1>

        <label className="map-title">TITLE OF MAP</label>
        <input type="text" placeholder="Name of Map" />

        <div className="save-cart-area">
            <h5>Save Card To</h5>
            
            <div className="new">
            <form className="vertical-scroll">
                <div className="form-group">
                    <input type="checkbox" id="commons" />
                    <label htmlFor="commons"><img src={require('../../images/logomask.png')} /> The Commons</label>
                </div>               
                <div className="form-group">
                    <input type="checkbox" id="favorites"/>
                    <label htmlFor="favorites"><img src={require('../../images/iconHeartNavMenu.svg')} /> My Favorites</label>
                </div>
                <QueryRenderer
                        environment={environment}
                        query={graphql`
                        query  SaveMapPopupQuery  
                        {  myBoards  
                            {  edges  
                                {              
                                    node  
                                    {  
                                        id                
                                        name                  
                                        sections  
                                        {                      
                                            edges  
                                            {                          
                                                node  
                                                {  
                                                    id                            
                                                    name                          
                                                }                      
                                            }              
                                        }              
                                    }  
                                }  
                            }  
                        }
                    `}
                    //variables={{}}
                        render={({error, props}) => {
                        if (error) {
                            console.error(error);
                            return <div>Error!</div>;
                        }
                        if (!props){
                            return <div/>
                        }
                        //  console.log("board data from server------->",JSON.stringify(props))
                                return <div>
                                      <div className="form-group">
{props.myBoards.edges.map((boardname, i) => (
    
<div key={i}>
        <Boardname 
        boardName = {boardname.node.name}
        boardname = {boardname}
        i = {i}
        />
        


</div>

))}

</div>
</div>
    }}/>  
        </form>
            <div className="addnew-coll">
            <label htmlFor="newcollection"><img className="pls-icon" src={require('../../images/iconPlus.svg')} /> Create New Collection</label>
            </div>
            <div className="ftr-share-area">
                <div className="ftr-buttons share-btn">
                    <span className="cancel" onClick={this.props.handleCloseMapPopup}>Cancel</span>
                    <span className="Save-btn">Save</span>
                    </div>
                </div>
            </div>
        </div>
        </div>  
      </div>
    );
  }
}




export default SaveMapPopup;