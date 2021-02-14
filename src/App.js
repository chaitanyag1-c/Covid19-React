import React from 'react'
import './App.css';
import Header from './Components/Header'
import Footer from './Components/Footer'
import Fetch from './Components/Fetch'
import Notification from './Components/Notification'
import Beds from './Components/Beds'
import Hero from './Components/Hero'
import {Route,Switch} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Header/>
      
      
        <Switch>
        <Route path="/contact" component={Fetch} />
        <Route path="/notification" component={Notification} />
        <Route path="/beds" component={Beds} />
        <Route exact path="/" component={Hero} />
        
        </Switch>
      <Footer />
    </div>
  );
}

export default App;
