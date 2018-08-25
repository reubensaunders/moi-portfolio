import React, { Component } from 'react';

class Info extends Component{

    render(){
        return(
            <div className="infoSection">
            <p>
             {this.props.text}
            </p>
            </div>
        );
    }
}

export default Info;