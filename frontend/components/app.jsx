import React from 'react';
import { Link } from 'react-router';
import LoginContainer from './login/login_container';
import Main from './main';

const App = ({ children }) => {
  let body = children;
  if (window.currentUser === undefined && children === null) {
    body = <img className="body" />;
  }
  return (
    <div className="app-container">
      <header className="top-control-bar">
        <Link to="/"><section className="main-logo">
          <h1>
            eLogix ST
          </h1>
        </section></Link>
        <div>
          <LoginContainer />
        </div>
      </header>
        {children}
    </div>
  );
};

export default App;
