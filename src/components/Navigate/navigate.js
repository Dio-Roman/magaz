import React from 'react';
import {Link} from 'react-router-dom';
import './style.css';

export default function Navigate () {
  return (
    <div class="navi">
      <Link to ='/about'>about us</Link>
    </div>
  )
}