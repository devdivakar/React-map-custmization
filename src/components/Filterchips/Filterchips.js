import React from 'react';
import '../../css/mapstyle.css';

class Filterchips extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return(
      <div className="search-for-filter-list">
            <div className="ind-comm-filter-list">Search Term: Area Deprivation Index<span></span><img className="close-arow-v" src={require('../../images/tagCross.svg' )}/></div>
            <a href="javascript:void(0);" className="clear-btn-filt">Clear All Filters</a>
        </div>
    )
  }
}
export default Filterchips;