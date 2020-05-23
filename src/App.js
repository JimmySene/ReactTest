import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Menu from './components/Menu';
import Accueil from './components/Accueil';
import MyCars from './components/MyCars';
import Form from './components/Form';
import ErrorPage from './components/ErrorPage';

class App extends Component {
  
  render() {
    return (
      
      <BrowserRouter>
        <Menu />

        <Switch>
          <Route path="/voitures" component={MyCars} />
          <Route path="/formulaire" component={Form} />
          <Route exact path="/" component={Accueil} />
          <Route component={ErrorPage} />
        </Switch>

    </BrowserRouter>
    
    );
  }
  
}

export default App;
