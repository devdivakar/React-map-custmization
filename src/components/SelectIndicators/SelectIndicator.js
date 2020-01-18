import React from 'react';
import '../../css/mapstyle.css';
import SearchIndicatorList from '../SearchIndicatorList/SearchIndicatorList';
import AdvanceSearch from '../AdvanceSearch/AdvanceSearch';
import FilterShow from '../FilterShow/FilterShow';
import Filterchips from '../Filterchips/Filterchips';
import {QueryRenderer , graphql} from 'react-relay'
import environment from '../../RelayEnvironment'
import SearchComponent from '../../components/SearchComponent/SearchComponent'



class SelectIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isSearchIndicatorListVisible:true,
      isAdvanceSearchVisible:false,
      isFilterShowVisible:false,
      FilterchipsSearchIndicatorListWrapperVisible:false,
      searchText : "",
      advanceSearchInputs: {},
      showAdavanceSearch: false

    }
  }
  
  closeIndicator = () => {
    this.props.closeSelectIndicator()
  }

handleAdvanceSearch = () => {   
   if (this.state.isAdvanceSearchVisible) {
     this.setState({isAdvanceSearchVisible:false});
  this.setState({FilterchipsSearchIndicatorListWrapperVisible:true});
}
  else{
   this.setState({isAdvanceSearchVisible:true});
  }
}
handleFilterShow = () => {
  if (this.state.isFilterShowVisible) {
    this.setState({isFilterShowVisible:false});
 }
 else{
  this.setState({isFilterShowVisible:true});
 }
}
closeAdvanceSearch = () => {
  this.setState({isAdvanceSearchVisible:false});
  this.setState({showAdavanceSearch:false})
}

handleFilterchipsSearchIndicatorListWrapper = () => {
  if (this.state.FilterchipsSearchIndicatorListWrapperVisible === true) {
    this.setState({FilterchipsSearchIndicatorListWrapperVisible:false});
 }
 else{
  this.setState({FilterchipsSearchIndicatorListWrapperVisible:true});
 }
}

closeSearchIndicatorlist = () => {
  this.setState({FilterchipsSearchIndicatorListWrapperVisible:false});
}

onTextChange = (e) => {
  this.setState({
    searchText: e.target.value
  } , () => console.log("onTextChange" , this.state.searchText) )
}

handleAdvanceSearch1 = () => {
  if(this.state.isAdvanceSearchVisible===true && this.props.globallyVisible===true){
    return <AdvanceSearch closeAdvanceSearch={this.closeAdvanceSearch} handleAdvanceSearchResult={this.handleAdvanceSearchResult}/>
  }
  else{
    return <div></div>
  }
}
handleFilterchips = () => {
  if(this.state.FilterchipsSearchIndicatorListWrapperVisible===true && this.props.globallyVisible===true){
    return <Filterchips/>
  }
  else{
    return <div></div>
  }
 
}
handleFilterShow1 = () => {
  if(this.state.isFilterShowVisible===true && this.props.globallyVisible===true){
    return <FilterShow/>
   

  }
  else{
    return <div></div>

  }
  
}

updateSearchText = (e) =>{
  const value = e.target.value
  this.setState({
    searchText : value
    })
  
}
handleAdvanceSearchResult = (searchInput) =>{
this.setState({showAdavanceSearch:true})
this.setState({advanceSearchInputs:searchInput})
console.log("handleAdvanceSearch",searchInput)
}




  render() {
      
    return (
      <div className="select-indicator-popup-wrap">
      <div className="select-indicator-wrapper"> 
        <div className="select-indicator-head-section">
          <a href="javascript:void(0):" className="select-ind-title">Select Indicators</a>
          <div className="select-close-sec" onClick={this.closeIndicator}>CLOSE <span></span></div>
        </div>

  

        <div className="select-indicator-srch-section">
        <div className="search-ind-input-wrap">
          <div className="search-for-ind-wrap">
          <div className="search-filer">
              <input type="text" name="" onChange ={this.onTextChange}  className="" value={this.state.searchText} placeholder="Search for Indicators" />
              




            
              <span className="srch-for-ind-icon"></span>
              <span className="srch-for-ind-close" onClick={this.closeSearchIndicatorlist}></span>
              <span className="srch-for-ind-dropbox" onClick= {this.handleAdvanceSearch}></span>
              {this.handleAdvanceSearch1()}
             {this.handleFilterchips()}
             
             </div>
          </div>
          <div className="comm-card-wrap" ><label className="toggle-btn-wrap"><input type="checkbox" onClick= {this.handleFilterchipsSearchIndicatorListWrapper}/><span className="slider">{ this.state.FilterchipsSearchIndicatorListWrapperVisible ? 'ON' : 'OFF' }</span></label><span className="tgg-slid-txt">THIS ONLY</span></div>
          <div className={this.state.isFilterShowVisible ? "select-indicator-filter blue-bg": "select-indicator-filter white-bg"} onClick= {this.handleFilterShow}>
            <span className="filter-icon"></span>
            <span className="filter-txt">{this.state.isFilterShowVisible ? 'HIDE FILTERS': 'SHOW FILTERS'}</span>
          </div>
          </div>
        </div>
        
        <div className="select-indicator-list-section">
        {this.handleFilterShow1()}
        { this.state.showAdavanceSearch === false ? <QueryRenderer
              environment={environment}
              query={graphql`
              query  SelectIndicatorAQuery($input:  IndicatorSearchInput!)  { 
                searchIndicators(search:  $input)  {
                  edges{ 
                    node{ 
                      id                                
                      indicatorName                                  
                      uniqueVariableName                                  
                      year                                  
                      geographicUnit  {
                      name                                  
                      }                          
                    }                  
                  }  
                }  
              }
            `}
            variables={{"input":  { "searchText":  this.state.searchText}}}
              render={({error, props}) => {
              if (error) {
                  console.error(error);
                  return <div>Error!</div>;
              }
              if (!props){
                  return <div/>
              }
            // console.log("indicator data from server------->",JSON.stringify(props))
            return <SearchIndicatorList searchlist= {props} router = {this.props.routeIndicatorId}/>


              

            }}/> : <QueryRenderer
            environment={environment}
            query={graphql`
            query  SelectIndicatorBQuery($input:  IndicatorSearchInput!)  {
            searchIndicators(search:  $input)  {
                    edges  {
                        node  {  
                              id                                
                              indicatorName                                  
                              uniqueVariableName                                  
                              year                                  
                              geographicUnit  {                                      
                                name                                  
                              }                          
                            }                  
                          }  
                        }  
                      }
            `}
            variables={{ "input": this.state.advanceSearchInputs }}
              render={({error, props}) => {
              if (error) {
                  console.error(error);
                  return <div>Error!</div>;
              }
              if (!props){
                  return <div/>
              }
            // console.log("Advance Search from server------->",JSON.stringify(props))
            return <SearchIndicatorList searchlist= {props} router = {this.props.routeIndicatorId}/>

            }}/>}
        
        
        </div>
      
        <div className="select-indicator-bottom-section">
        <p className="updat-action">{ this.state.FilterchipsSearchIndicatorListWrapperVisible ? 'UNDO LAST ACTION' : '' }</p>
          <a href="javascript:void(0);" className="filter-close" onClick={this.closeIndicator}>CLOSE</a>
        </div>
      </div>
      </div>
    );
  }
}

export default SelectIndicator;