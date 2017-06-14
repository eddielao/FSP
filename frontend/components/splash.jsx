import React from 'react';
import { Link } from 'react-router';

class Splash extends React.Component {
  /*
  ** To make rotate background images
  ** 1) Change this to a class component
  ** 2) Define a state to change className
  ** 3) Trigger a timer inside ComponentDidMount
  */

  render () {
    return (
      <div className="splash">
        Welcome!
      </div>
    );
  }
}

export default Splash;
