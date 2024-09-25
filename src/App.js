import React from 'react';
import Aside from './componet/Aside'
import Main from './componet/Main';
import Searchbar from './componet/Searchbar';
import './App.css'; 

function App() {
  return (
    <div className="app">
      <Searchbar />
      <div className="container">
        <Aside />
        <Main />
      </div>
    </div>
  );
}

export default App;
