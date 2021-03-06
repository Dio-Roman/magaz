import React , { Component } from 'react';
import {Link} from 'react-router-dom';
import {AboutDiv} from './aboutStyle';
import {CSSTransition} from 'react-transition-group';
import './style.css';

import Button from '@material-ui/core/Button';
import teal from '@material-ui/core/colors/teal';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme ({
  palette : {
      primary: teal
  }
})

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flag: false
    }
  }
  handleClick = () => {
    this.setState ({
      flag: !this.state.flag
    })
  }
  render() {
    const {flag} = this.state;
    return (
      <AboutDiv >
        <h3>
          Hello World.
        </h3>
        <p>Welcome to our</p>
        <MuiThemeProvider theme={theme}>
          <Button variant="contained" color='primary' onClick={this.handleClick}>click me!</Button>
        </MuiThemeProvider>     
        {flag &&
        <CSSTransition 
          in = {flag}
          appear = {true}
          classNames="animate">  
          <Link to ='/'>online shop!</Link>
        </CSSTransition> }
      </AboutDiv>
    )
  }
}
