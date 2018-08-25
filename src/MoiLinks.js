import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class MoiLinks extends Component{
    render(){
        return(            
            <div>
              <ul>
                <li><Link to="/">home</Link></li>                
                <li><Link to="/more">more</Link></li>                
                <li><Link to="/moree">more more</Link></li>                
              </ul>
            </div>
        );
    }
}

export default MoiLinks;