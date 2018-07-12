import React, { Component } from 'react';

class Info extends Component{

    render(){
        return(
            <div className="infoSection" hidden={this.props.hidden}>
            <p>
             {this.props.text}
            </p>
            </div>
        );
    }
}

export default Info;