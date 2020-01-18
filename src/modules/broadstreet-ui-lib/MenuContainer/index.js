import React, {Component} from 'react'
import LeftNavigation from './components/LeftNavigation'
import TopNavigation from './components/TopNavigation'
import '../css/index.css'

class MenuContainer extends Component {
    constructor(props){
      super(props);
      this.state = {
          isLeftMenuOpen: false,
          userId: ""
      }
    }
  
  onToggleLeftMenu = () => 
  {
    this.setState(prevState => ({
      //isLeftMenuOpen: !prevState.isLeftMenuOpen
    }), 
    
    function() { 
      if(this.props.onToggleLeftMenu)
      {
        this.props.onToggleLeftMenu(this.state.isLeftMenuOpen);
      }
    }
    );
  }

  onLogin = (userId) => {
    this.setState({
      userId : userId
    })
  }

  render() {
    return <div className="bsui-maincontainer">
      <TopNavigation hideCarret={this.hideCarret} {...this.props} onToggleLeftMenu={this.onToggleLeftMenu} onLogin={this.onLogin}/>
      <div className="bsui-leftcontainer">
        <LeftNavigation isMenuOpen={this.state.isLeftMenuOpen} {...this.props} key={this.state.userId}/>
        <div className={this.state.isLeftMenuOpen ? "bsui-contentcontainer-open" : "bsui-contentcontainer-closed"}>
          {this.props.children}
        </div>
      </div>
    </div>
  }
}

export default MenuContainer;