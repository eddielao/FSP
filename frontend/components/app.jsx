import React from 'react';
import { Link } from 'react-router';
import LoginContainer from './login/login_container';

const App = ({ children }) => (
  <div className="app-container">
    <header className="top-control-bar">
      <section className="main-logo">
        <h1><Link to="/">eLogix ST</Link></h1>
      </section>
      <nav>
        <LoginContainer />
      </nav>
    </header>
      {children}
  </div>
);

export default App;
