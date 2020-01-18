import React from 'react';
import '../../css/mapstyle.css';
import {QueryRenderer , graphql} from 'react-relay'
import environment from '../../RelayEnvironment'
class AdvanceSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText:"",
                    anyOfThese:"",
                    excludeIf:""
      
    }
  }




  onSearchTextChange = (e) => {
    this.setState({
      searchText: e.target.value
    }) 
  }
  onAnyOfTheseChange = (e) => {
    this.setState({
      anyOfThese: e.target.value
    }) 
  }
  onExcludeIfChange = (e) => {
    this.setState({
      excludeIf: e.target.value
    }) 
  }
      
    advanceSearch = () =>{

    const searchInput = 
    {"searchText":  this.state.searchText,  
      "anyOfThese": this.state.anyOfThese,  
      "excludeIf" : this.state.excludeIf }
    this.props.handleAdvanceSearchResult(searchInput)
    console.log("advanceSearch is called from child",searchInput)
    }

              render() {
                return(
                  <div>
                  
                  <div className="right-side text-right">
                    <div className="advance-search-popup advance-srch-list">
                      <h5>this is Advance Search</h5>
                      <label>Search for This Phrase</label>
                      <input type="text" placeholder="Area Deprivation Index" onChange={this.onSearchTextChange} value= {this.state.searchText} />
                      <label>Any of These</label>
                      <input type="text" placeholder="Any of These" required onChange={this.onAnyOfTheseChange} value={this.state.anyOfThese}/>
                      <label>Exclude If</label>
                      <input type="text" placeholder="Exclude If" required onChange={this.onExcludeIfChange} value={this.state.excludeIf}/>
                      <div className="text-center buttons">
                      <button onClick={this.props.closeAdvanceSearch}>CANCEL</button>
                      <button type="submit" onClick={this.advanceSearch}>Apply</button>
                      </div>
                    </div>
                  </div>
            </div>
                  
                );
              }
            }
            export default AdvanceSearch;
                  
