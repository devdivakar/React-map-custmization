import React from 'react';
import '../../css/mapstyle.css';


class SelectAreaDropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
      //images/user1.png
    return (
        <div className="">
        {/* <span className="search-icon-title" onClick={this.showDropdownMenu}>Select Area</span> */}
        { this.state.displayMenu ? (
            <div className="map-search-wrapper">
            <p className="map-srch-title">MY AREAS</p>
            <ul>
                <li><a className="active"  href="javascript:void(0);">
                    <div className="serch-for-prof-list">
                        <div className="srch-map-prof">
                          <img src= {require("../../images/user1.png")} alt="" />
                        </div>
                        <div className="srch-map-detail">
                            <h4>Detroit, MI</h4>
                            <span>My Areas</span>
                        </div>
                    </div>
                    </a>
                </li>
                <li><a className=""  href="javascript:void(0);">
                    <div className="serch-for-prof-list">
                        <div className="srch-map-prof">
                          <img src= {require("../../images/user1.png")} alt="" />
                        </div>
                        <div className="srch-map-detail">
                            <h4>Detroit, MI</h4>
                            <span>My Areas</span>
                        </div>
                    </div>
                    </a>
                </li>
            <li className="srch-add-more-list">
                <div className="srch-list-add-wrap">
                 <span className="srch-list-add-icon"></span><span className="srch-list-add-txt">Create New Area “Detroi”</span></div>
            </li>
        
            </ul>
            </div>
          ):
          (
            null
          )
          }           
        </div>
    );
  }
}

export default SelectAreaDropdown;