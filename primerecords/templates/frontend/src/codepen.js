import React from 'react'
import './Header.css'
import './dashboardHeader.css'
import CloseIcon from '@material-ui/icons/Close';
import MenuIcon from '@material-ui/icons/Menu';
import MoneyIcon from '@material-ui/icons/Money'
import HomeIcon from '@material-ui/icons/Home';
import ShopIcon from '@material-ui/icons/Shop';
import SettingsIcon from '@material-ui/icons/Settings';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import TimelineIcon from '@material-ui/icons/Timeline';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { Link } from '@material-ui/core';


class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */}
  }
  
  render() {
    return (
      <div className="header">
        <header class="header fixed-top smalex" style={{}}>
          <nav class="navbar navbar-expand-lg navbar-light main-nav" >
            <div class="container-fluid">
              <Link to="/">
                  <img src="../pn.png" height="40px" alt="" className="clear"/>
              </Link>
              <ul className="menu simple float-left" style={{display:"flex"}}>
                <li>Home</li>
                <li><a href="#">About</a></li>
                <li><button type="button" className="button small" onClick={this.props.onMenuToggle}><MenuIcon /></button></li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    )
  }
}



class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {/* Awesome State Not Yet Used */}
  }
  
  render() {
    return (
      <div className={`sidebar-menu${this.props.isMenuOpen === true ? ' open' : ''}`} style={{position: "absolute", top: "65px"}}>
        <button type="button" className="button small float-right" onClick={this.props.onMenuToggle}><CloseIcon /></button>
        <div className="side-content">
          <p><HomeIcon/> Dashboard</p>
          <p><MoneyIcon/> Earnings</p>
          <p><ShopIcon/> Purchase Plan</p>
          <p><TimelineIcon/> My Investment</p>
          <p><CreditCardIcon/> Deposit History</p>
          <p><AccountBalanceWalletIcon/> Withdraw</p>
          <p><EmojiPeopleIcon/> Referral</p>
          <p><SettingsIcon/> Account Settings</p>
        </div>
      </div>
    )
  }
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    }
    this.toggleMenu = this.toggleMenu.bind(this)
  }
  
  toggleMenu() {
    this.setState({isMenuOpen: !this.state.isMenuOpen})
  }
  
  render() {
    return (
      <div className="app-container">
        <Header
          onMenuToggle={this.toggleMenu}
        />
        <Menu
          isMenuOpen={this.state.isMenuOpen}
          onMenuToggle={this.toggleMenu}
        />
      </div>
    )
  }
}

export default App

// ReactDOM.render(<App />, document.getElementById('app'));






// .sidebar-menu {
//   width: 300px;
//   height: 100%;
//   position: absolute;
//   top: 0;
//   left: -300px;
//   -webkit-transform: translateX(0);
//   transform: translateX(0);
//   -webkit-transition: 0.3s ease all;
//   transition: 0.3s ease all;
//   background: #333;
// }
// .sidebar-menu.open {
//   -webkit-transform: translateX(300px);
//   transform: translateX(300px);
// }
// .sidebar-menu .menu > li > a {
//   padding: 15px 20px;
//   color: #fff;
// }
