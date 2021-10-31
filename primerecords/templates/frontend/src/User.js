import React, { Component } from 'react'
// import { NavSidebar } from 'es6-react-admin-lte'
import AdminLTE, { Sidebar, Navbar, Entry, Tab, infobox, MessageItem, DataTable, DescriptionItem, Content, Row, Col, Box, Button } from 'adminlte-2-react';
import './User.css'
import Tradingview from './Tradingview';


const { Item, UserPanel, Header } = Sidebar


class HelloWorld extends Component {
  state = {}

  render() {
    return (<Content title="Hello World" subTitle="Getting started with adminlte-2-react" browserTitle="Hello World">
      <Row>
        <Col xs={6}>
          <Box title="My first box" type="primary" closable collapsable footer={<Button type="danger" text="Danger Button" />}>
            Hello World
          </Box>
        </Col>
        <Col xs={6}>
          <Box title="Another box">
            Content goes here
          </Box>
        </Col>
      </Row>
    </Content>);
  }
}



class User extends Component{
  sidebar = [
    <UserPanel username="dan" status="Active" link="#" imageUrl="../pn.png" />,
    <Item key="hello" text="Dashboard" to="auth/user" />,
    <Item key="hello" text="Purchase Plan" to="" />,
    <Item key="hello" text="My Investments" to="" />,
    <Item key="hello" text="Earnings" to="" />,
    <Item key="hello" text="Deposit" to="" />,
    <Item key="hello" text="Withdrawal" to="" />,
    <Item key="hello" text="Mailbox" to="" />,
    <Item key="hello" text="Referral" to="" />,
    <Item key="hello" text="Account" to="" />



  ]

  render(){
    return(
      <AdminLTE title={["PRIME", " Minners"]} titleShort={["P", " M"]} theme="yellow" sidebar={this.sidebar} >

        <Content title="Dashboard" subTitle="Control Panel" path="/auth/user" className="dashboard">
          <Row>
            <Col xs={12}>
              <Box title="Announcement" closable textCenter className="bigyellow">
                Get 15% profit daily return on your investments
              </Box>
            </Col>
            <Col xs={12}>
              <Box closable className="bigred">
                Notice: Your email is not verified yet. Please check your email for instructions on how to verify.
              </Box>
              
            </Col>
            
          </Row>

          <Row>
            <Col xs={4}>
              <Box textCenter className="infogray">
              $0 USD <br /><b>Available Balance</b>
              </Box>
            </Col>
            <Col xs={4}>
              <Box textCenter className="infogreen">
                $0 USD <br /><b>My Earnings</b>
              </Box>
            </Col>
            <Col xs={4}>
              <Box textCenter className="infored">
              $0 USD <br /><b>Referral Bonus</b>
              </Box>
            </Col>
          </Row>


          <Row>
            <Col xs={12}>
              <Box className="pricewidget">
                <Tradingview />
              </Box>
            </Col>
          </Row>


        </Content>
      </AdminLTE>
      
    )
  }
}

export default User




// import React from 'react'
// import './User.css'
// // import 'react-bootstrap'


// class User extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {/* Awesome State Not Yet Used */}
//   }
  
//   render() {
//     return (
//       <div className="header">
//         <ul className="menu simple float-center">
//           <li>Home</li>
//           <li><a href="#">About</a></li>
//           <li><a href="#">Contact</a></li>
//           <li><button type="button" className="button small" onClick={this.props.onMenuToggle}>Toggle Menu</button></li>
//         </ul>
//       </div>
//     )
//   }
// }


// class Menu extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {/* Awesome State Not Yet Used */}
//   }
  
//   render() {
//     return (
//       <div className={`sidebar-menu${this.props.isMenuOpen === true ? ' open' : ''}`}>
//         <button type="button" className="button small float-right" onClick={this.props.onMenuToggle}>Toggle Menu</button>
//         <ul className="vertical menu">
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//           <li><a>Menu Item</a></li>
//         </ul>
//       </div>
//     )
//   }
// }


// class App extends React.Component {
  
  
//   render() {
//     return (
//       <div className="app-container">
//         <Header
//           onMenuToggle={this.toggleMenu}
//         />
//         <Menu
//           isMenuOpen={this.state.isMenuOpen}
//           onMenuToggle={this.toggleMenu}
//         />
//       </div>
//     )
//   }
// }

// // ReactDOM.render(<App />, document.getElementById('app'));



// export default User