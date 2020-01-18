import React, {Component}   from 'react'

class TopNavigation extends Component{
  constructor(props){
    super(props)

    this.state = {
      isLoginPopUpVisible : false,
      isUpdateHeader : true,
    }
    
  }

  

  handleIsUpdate = () => {
    if (this.state.isUpdateHeader === true){
      this.setState({
        isUpdateHeader : false ,
        isLoginPopUpVisible : false
      })
    }else{
      this.setState({
        isUpdateHeader : true ,
        isLoginPopUpVisible : false
      })
    }
  }

  hideUnhideLoginPopUp = () => {
    if (this.state.isLoginPopUpVisible === true ) {
      this.setState({
        isLoginPopUpVisible : false
      })
    }else{
      this.setState({
        isLoginPopUpVisible : true
      })
    }
  }

  render() {
    return <div className="bsui-topnavmenu">
      
    <div className="top-left-menu">
      <button onClick={this.props.hideCarret} className="top-menu-icon"><span className="icon-img"></span></button> 
        <div className="top-header-icon">
          <img  src={require("../../../../../images/CommunityCommons.svg")} alt=""/>
        </div>
    </div>
    <div className="top-search-wrap"> 
      <div className="search-panel-header">
          <label className="search-icon"><input type="input" name="search" placeholder="Search The Commons"/></label>
          <button className="btn btn-close"></button>
          <span className="drop-btn"></span>
      </div>
    </div>
    </div>
  }
}

export default TopNavigation