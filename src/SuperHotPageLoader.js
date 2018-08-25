import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import ReactAnime from 'react-anime';
import MoiLinks from './MoiLinks';
const Anime = ReactAnime;

const Index = () => (
  <div>
  <Anime opacity={[0, 1]} translateY={'5em'} delay={(e, i) => i * 1000}>
  <div className="Me">
  <div className="ok"> 
      <h1>Hi, </h1>
      </div>            
  </div>
<div className="Me">
  <div className="ok">        
      <p>I'm Michael Saunders. I <i class="fas fa-heart"></i> making websites and apps.
      </p>
      <img src='C:\Users\Administrator\Pictures\professionalpic2.jpg'/>
      <p>My core skills include: ES6, .NET Core and AWS</p>
      <p>I'm currently working for <a href="https://www.rjdm.com/">RJDM Studios</a> in Northampton, England lol.</p>
      {/* <Info text="ok yo yo yo dude" hidden="hidden"/> */}
  </div>
</div>
</Anime>
</div>
)

const More = () => (
    <div>
      <h2>some more info</h2>
    </div>
)
  const MoiMore = () => (
    <div>    
    <Anime opacity={[0, 100]} translateY={'1em'} delay={(e, i) => i * 50}>
        
  <div className="Me">
    <div className="ok">                
        <p>I guess i know react routing lol</p>        
    </div> 
    </div>  
  </Anime> 
  </div>
)

class SuperHotPageLoader extends Component{
    render(){
        return(
            <div>
            <Router>
            <div>
              <MoiLinks/>
              <Route exact path="/" component={Index}/>        
              <Route exact path="/more" component={More}/>
              <Route exact path="/moree" component={MoiMore}/>
            </div>
          </Router>
          </div>
        );
    }
}

export default SuperHotPageLoader;