import React, { Component } from 'react';
import './App.css';
import ReactAnime from 'react-anime';
import Info from './Info.js';
const Anime = ReactAnime;

class Moi extends Component {
  render() {
    return (
      <div>
        <Anime opacity={[0, 1]} translateY={'5em'} delay={(e, i) => i * 1000}>
        <div className="Me">
        <div className="ok"> 
            <h1>Hi, </h1>
            </div>            
        </div>
      <div className="Me">
        <div className="ok">        
            <p>I'm Reuben Saunders. I write websites and apps - anything from complex admin systems to
                augmented reality apps.</p><p> I <i class="fas fa-heart"></i> ReactJs w/ Redux, SASS, .NET Core, node.js and AWS serverless.
            </p>
            <p>I'm currently working for <a href="https://www.rjdm.com/">RJDM Studios</a> in Northampton, England.</p>
            {/* <Info text="ok yo yo yo dude" hidden="hidden"/> */}
        </div>
      </div>
      </Anime>
      {/* <div className="Me">
      <div className="ok">
          <div className="moi-frame">
          <a class="fas fa-heart"/><p>author: reuben saunders</p>
          </div>          
      </div>
      </div>
      <div className="Me">
      <div className="ok">
          <br/>
      </div>
      </div> */}
      </div>
    );
  }
}

export default Moi;
