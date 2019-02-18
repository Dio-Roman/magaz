import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Shop from './components/Shop/shop';
import About from './containers/About/about';

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
