
import '../../css/mapstyle.css';
import React, { Component } from 'react'
import RangeSlider from 'reactrangeslider';
import SliderComponent from '../SliderComponent/SliderComponent';
import '../../css/normalize.css';
import ReactDOM from 'react-dom';




class FilterShow extends React.Component {
  constructor(props) {
    super(props); 
    this.state = {
      SearchDataSets:""
    }
  }
 
  render() {
    return(
      <div className="filter-dataset-wrapper">
        <div className="filter-by-years-wrap">
            <div className="filter-by-data-left filter-by-comm-wrap ">
            <h4>Datasets</h4>
            <div className="search-for-ind-wrap new"><input type="text" name="" className=""  placeholder="Search Datasets" /><span className="srch-for-ind-icon"></span><span className="srch-for-ind-close"></span></div>
            </div>
            <div className="filter-by-data-center filter-by-comm-wrap ">
            <h4>Years</h4>
            <div className="">
                <span className="filter-reset-wrap"><span className="blue-close-arrow">&nbsp;</span>Reset</span>
                <p className="filter-range-txt">2014 - Most Recent</p>
                <div>
            </div>
              {/* <SliderComponent /> */}

            </div>
            </div>
            <div className="filter-by-data-right filter-by-comm-wrap ">
            <h4>Geography</h4>
                <div className="filter-checkbox-wrap">
                <div className="testboard_sub mapright-side">
                   
                <form className="map-hidefilter">
                <div className="form-group">
                        <input type="checkbox" id="united" />
                        <label htmlFor="united">United States(50)</label>
                  </div>
                  <div className="form-group">
                        <input type="checkbox" id="state1" />
                        <label htmlFor="state1">State(32)</label>
                  </div>
                  <div className="form-group">
                        <input type="checkbox" id="county" />
                        <label htmlFor="county">County(90)</label>
                  </div>
                  <div className="form-group">
                        <input type="checkbox" id="Place" />
                        <label htmlFor="Place">Place:City, Village, Town (1028)</label>
                  </div>
                  <div className="form-group">
                        <input type="checkbox" id="zip" />
                        <label htmlFor="zip">Zip code or ZCTA</label>
                  </div>

                  <div className="form-group">
                        <input type="checkbox" id="census" />
                        <label htmlFor="census">Census Tract or Block Group</label>
                  </div>
                </form>
                </div>
                </div>
            </div>
        </div>
        <div className="filternew-row">
          <div className="fliterbx-new-left">
            <span className="cleartext">Clear All Filters</span>
          </div>
          <div className="fliterbx-new-right">
            <span className="fliter-applied">Filters Applied</span>
            <span className="closefilter">Close Filter</span>
          </div>
        </div>
      </div>
    );
  }
}
export default FilterShow;