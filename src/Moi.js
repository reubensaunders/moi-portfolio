import React, { Component } from 'react';
import './App.css';
import ReactAnime from 'react-anime';
import SuperHotPageLoader from './SuperHotPageLoader';

const SuperHotLoad = SuperHotPageLoader;
const Anime = ReactAnime;

class Moi extends Component {
  render() {
    return (
      <div>      
      <SuperHotLoad/>      
      </div>
    );
  }
}

export default Moi;
