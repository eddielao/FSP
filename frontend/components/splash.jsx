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
    this.state = {
                  imgNum: parseInt(Date.now()/1000)%3
                 };
  }

  // componentDidMount() {
  //   let imgCount = 2;
  //   setInterval(()=>{
  //     console.log("componentDidMount triggered");
  //     this.setState({ imgNum: parseInt(Date.now()/1000) % imgCount });
  //   }, 8000);
  // }

  render () {
    return (
      <div className={`splash-${this.state.imgNum}`}>
        Welcome!
      </div>
    );
  }
}

export default Splash;
