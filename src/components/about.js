import React from 'react';
import {Link} from 'react-router-dom';
import {AboutDiv, P} from './aboutStyle'
export default function About () {
  return (
    <AboutDiv>
      <h3>
        Hello World.
      </h3>
      <P>Welcome to our</P>
      <Link to ='/'>online shop!</Link>
    </AboutDiv>
  )
}