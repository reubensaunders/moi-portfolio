import React, {Component} from 'react';

const _90BPM = 800;
const _60BPM = 1000;
const _30BPM = 1400;

let BPMyo = 0;



class BPM extends Component {
    constructor(props) {
      super(props);      
      this.state = { seconds: 0 };
      BPMyo = 60 / this.props.bpm * 1000;
    }
  
    tick() {
      this.setState(prevState => ({
        seconds: prevState.seconds + 1
      }));
    }

    bpm(){
        BPMyo = 60 / this.bpm * 1000;
    }
  
    componentDidMount() {
      this.interval = setInterval(() => this.tick(), BPMyo);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
  
    render() {
      return (
        <div>
          Seconds: {this.state.seconds}
        </div>
      );
    }
  }

  export default BPM;