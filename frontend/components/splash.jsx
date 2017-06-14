import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  /*
  ** To make rotate background images
  ** 1) Change this to a class component
  ** 2) Define a state to change className
  ** 3) Trigger a timer inside ComponentDidMount
  */

  constructor(props) {
    super(props);
    this.state = { imgNum: 1 };
  }

  ComponentDidMount() {
    let imgCount = 2;
    setInterval(function() {
      this.setState({ imgNum: (this.state.imgNum + 1) % imgCount });
    }, 5000);
  }

  render () {
    return (
      <div className={`splash-${this.state.imgNum}`}>
        Welcome!
      </div>
    );
  }
}

export default Splash;
