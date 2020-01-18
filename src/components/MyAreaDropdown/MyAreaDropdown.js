import React from 'react';
import '../../css/mapstyle.css';
import WithCallbacks from '../ReactSelectAsync/ReactSelectAsync';



export default class MyAreaDropdown extends React.Component {
constructor(props){
 super(props);

 this.state = {
       displayMenu: false,
       isSearchingUsAreas: true,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
// console.log("my area drop down props-->",props)
};

  filterUsAreas = (event) => {
    event.preventDefault();
    this.setState({ isSearchingUsAreas: true }, this.hideDropdownMenu);
  }

  filterMyAreas = (event) => {
    event.preventDefault();
    this.setState({ isSearchingUsAreas: false }, this.hideDropdownMenu);
  }

  showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    //document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      //document.removeEventListener('click', this.hideDropdownMenu);
    });

  }
  handleWithCallbacks1 = () => {
    if(this.props.globallyVisible===true){
  
    return <WithCallbacks {...this.props} closeSelectIndicator={this.closeSelectIndicator}/>
    }
    else{
      return <div></div>
    }
   
  }

  render() {
    return (

       <div className="inner-srch-wrap">
       <span className="search-icon-title" onClick={null}>Select Area</span>
               
                    <div className="search-panel-card">
                    
                        {/* <input type="search" className="searchinput" name="" placeholder="Search Areas" /> */}
                        {/* <WithCallbacks {...this.props}/> */}
                        {this.handleWithCallbacks1()}
                        <span className="search-map-icon" ></span>
                        <span className="drop-btn-card" onClick={this.showDropdownMenu}>{this.state.isSearchingUsAreas?"U.S. Areas":"My Areas"}</span>

          { this.state.displayMenu ? (
            <div className="serch-map-location-wrap">
             <p className="map-srch-title">SEARCH AREAS</p>
              <ul>
                <li><a className="active" href="javascript:void(0);">
                <div className="serch-add-wrapper">
                  <span>U.S. Areas</span><button onClick={this.filterUsAreas} type="button" className="btn btn-srch-add">APPLY</button>
                </div>
              </a></li>
              <li><a className="active" href="javascript:void(0);">
                <div className="serch-add-wrapper">
                  <span>My Areas</span><button type="button" onClick={this.filterMyAreas} className="btn btn-srch-add">APPLY</button>
                </div>
              </a></li>
                {/* <li><a >My Area</a></li>  */}
              </ul>
          </div>
        ):
        (
          null
        )
        }

       </div>
       </div>

    );
  }
}

