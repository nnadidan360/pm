import React, { useState } from 'react'
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MinningFarm from './MinningFarm';
import Main from './main';
import Affiliate from './Affiliate';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pricing from './Pricing';
import About from './About';
import Signup from './Signup';
import Investment from './Investment'
import User from './User'
import DashboardHeader from './dashboardHeader';








function App() {

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.id    = 'tawkId';
  //   script.async = true;
  //   script.src   = 'https://embed.tawk.to/' + '5f01080d223d045fcb7b5265' + '/default';
  //   script.charset = 'UTF-8';
  //   script.setAttribute('crossorigin', '*');
  //   document.body.appendChild(script);
  // }, [])

  
   
    

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/auth/user">
              <DashboardHeader />
          </Route>

          <Route path="/signup">
            <Header />
            <Signup />
            <Footer />
          </Route>
          <Route path="/investment">
            <Header />
            <Investment />
            <Footer />
          </Route>
          <Route path="/about">
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/pricing">
            <Header />
            <Pricing />
            <Footer />
          </Route>
          <Route path="/farm">
            <Header />
            <MinningFarm />
            <Footer />
          </Route>
          <Route path="/affiliate">
            <Header />
            <Affiliate />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Main />
            <Footer />
          </Route>          
        </Switch>
    
      </div>
    </Router>

    
  );
}

export default App;





