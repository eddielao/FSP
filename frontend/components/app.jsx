import React from 'react';
import { Link } from 'react-router';
import LoginContainer from './login/login_container';
import Main from './main';

const App = ({ children }) => {
  let body = children;
  if (window.currentUser === undefined) {
    body = <img className="body" />;
  }
  return (
    <div className="app-container">
      <header className="top-control-bar">
        <Link to="/home/index"><section className="main-logo">
          <h1>
            eLogix ST<img src="https://res.cloudinary.com/eddielao/image/upload/v1490306710/logo.png" />
          </h1>
        </section></Link>
        <div>
          <LoginContainer />
        </div>
      </header>
        {body}
    </div>
  );
};

export default App;
