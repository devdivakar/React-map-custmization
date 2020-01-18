import React from 'react';
import '../../css/mapstyle.css';

class Indicators extends React.Component{
    constructor(props){
        super(props);
        this.state = {IndicatorAdded:false}
    }
    addMaplayerCaller = () =>{
        var indicatordata = this.props.indicatordata
        this.props.addMaplayer(indicatordata)
            // console.log(indicatordata)
        if (this.state.IndicatorAdded === true) {
            this.setState({IndicatorAdded:false});
         }
         else
          this.setState({IndicatorAdded:true});
       

    }
    render(){
        return(
            <a href="javascript:void(0);"  className={this.state.IndicatorAdded ? "btn-add-map add-active-map" : "btn-add-map"} onClick={this.addMaplayerCaller} >{this.state.IndicatorAdded ? "ADDED TO MAP" : "ADD TO MAP"}</a> 
        )
    }
} 

class SearchIndicatorList extends React.Component {
  constructor(props) {
    super(props);
   
    // console.log("indicatorprops" , props)
    this.state = {
        IndicatorData: props.searchlist.searchIndicators.edges,
        CurrentPage: 1,
        IndicatorDataPerPage: 10
    }
  }


addMaplayer = (indicatorid) =>{
this.props.router(indicatorid)
}
handleClick = (e) =>{
    this.setState({
        CurrentPage : Number(e.target.id)
    })
}
handleForward = () =>{
   
    const {IndicatorData,IndicatorDataPerPage} = this.state;
    var i = this.state.CurrentPage;
    var pageNumbers = Math.ceil(IndicatorData.length/IndicatorDataPerPage)
  
   if (i<pageNumbers){
    this.setState(prevState => {
        return {CurrentPage: prevState.CurrentPage + 1}
     })
   }
   

    }

handleBackward = () =>{
   
    
    var i = this.state.CurrentPage;
    if (i>1){
        this.setState(prevState => {
            return {CurrentPage: prevState.CurrentPage - 1}
         })
       }
}

  render() {

    const {IndicatorData,CurrentPage,IndicatorDataPerPage} = this.state;
    const indexOfLastIndicator = CurrentPage*IndicatorDataPerPage;
    const indexOfFirstIndicator = indexOfLastIndicator - IndicatorDataPerPage;
    const CurrentIndicators = IndicatorData.slice(indexOfFirstIndicator,indexOfLastIndicator);
    const pageNumbers = [];
    for (let i=1 ; i<=Math.ceil(IndicatorData.length/IndicatorDataPerPage) ; i++){
        pageNumbers.push(i);
    }

        
    
    return(
          <div className="filter-list-section">
            <div className="filter-list-detail-wrapper">
                <ul>
                    <li>
                        <div className="search-term-list-left">
                            <span>Search for Indicators ({this.props.searchlist.searchIndicators.edges.length} Results)</span>
                        </div>
                        <div className="search-term-list-right">
                            <a href="javascript:void(0);" className="btn-add-map">ADD ALL TO MAP</a>
                        </div>
                    </li>
                    {CurrentIndicators.map((indicators, i) => (
                         <li key={i}>
                         <div className="search-term-list-left">
                             <p>{indicators.node.indicatorName}</p>
                         </div>
                         <div className="search-term-list-right">
                         
                          
                            <Indicators  indicatorhandler = {this.indicatorhandler} addMaplayer={this.addMaplayer} indicatordata = {indicators.node.id}></Indicators>
                         </div>
                     </li>
                    ))}
                </ul>
            </div>
                <div className="list-cou-wrapper">
                <div className="filter-list-cou-txt">
                    <div className="slt-filter-list-input-wrap">
                             Display {CurrentIndicators.length}
                        <span></span>
                    </div>
                </div>
                <div className="filter-list-cou-pg">
                    <ul>
                        <li><span className="arrow-left-filter" onClick = {this.handleBackward}><i className="fa fa-angle-left" aria-hidden="true"></i></span><span onClick = {this.handleBackward}>Previous</span></li>
                        {pageNumbers.map((number, i) => (
                            
                                <li className="active"  key = {i} ><a id={number} onClick={this.handleClick} href="javascript:void(0);">{number}</a></li>

                            
                        ))}
                       
                        <li><span onClick = {this.handleForward}>Next</span><span className="arrow-right-filter" onClick = {this.handleForward}><i className="fa fa-angle-right" aria-hidden="true"></i></span></li>
                        
                    </ul>
                </div>
          </div>
        </div>         
      
    );
  }
}
export default SearchIndicatorList;