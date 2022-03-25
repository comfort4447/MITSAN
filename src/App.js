import React from 'react'
import Home from './Home'
import AboutPage from './AboutPage';
import AboutUs from './AboutUs';
import Contact from './Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
   <>
   {/* This is the alias of BrowserRouter i.e. Router */}
   <Router>
        <Switch>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" component={Home} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/aboutus" component={AboutUs} />
            
          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/contact" component={Contact} />

          {/* This route is for contactus component
          with exact path "/contactus", in 
          component props we passes the imported component*/}
          <Route path="/aboutpage" component={AboutPage} />
            
          {/* If any route mismatches the upper 
          route endpoints then, redirect triggers 
          and redirects app to home component with to="/" */}
          <Redirect to="/" />
        </Switch>
      </Router>
    {/* <Home /> */}
    {/* <AboutPage /> */}

   </>
  );
}

export default App;
