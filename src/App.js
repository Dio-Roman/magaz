import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navigate from './components/navigate';

import Shop from './components/shop';
import About from './components/about';

class App extends Component {
  render () {
    return (
      <Router>
        <>
          <Switch>
            <Route exact path='/' component={Shop}/>
            <Route path='/about'component={About}/>
          </Switch>
        </>
      </Router>
    );
  }  
  
  }


export default App;
