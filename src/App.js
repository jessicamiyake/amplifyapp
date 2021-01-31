import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import {Route, BrowserRouter, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
      <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
  
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <ul>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          </header>
      </div>
      </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
