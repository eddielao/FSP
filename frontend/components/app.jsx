import React from 'react';
import { Link } from 'react-router';
import LoginContainer from './login/login_container';

const splash = () => (
  <img className="body" />
);

const App = ({ children }) => {
  console.log(children);
  let body = children === null ? splash() : children;
  return (
    <div className="app-container">
      <header className="top-control-bar">
        <Link to="/"><section className="main-logo">
          <h1>eLogix ST</h1>
        </section></Link>
        <nav>
          <LoginContainer />
        </nav>
      </header>
        {body}
    </div>
  );
};

export default App;
