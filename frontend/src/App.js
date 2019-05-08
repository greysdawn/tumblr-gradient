import React from 'react';

import Main from './Main';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p style={{paddingRight: "20px"}}>Tumblr Gradient Generator</p>
      <a className="App-link" href="https://github.com/greysdawn/tumblr-gradient">(github)</a>
      </header>
      <Main />
    </div>
  );
}

export default App;
