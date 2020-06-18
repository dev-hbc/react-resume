import React from 'react';
import './App.css';

import {Header, Banner} from "./views"

const App = () => {
  return (
    <div className="App">
      <Header banner={<Banner/>}/>
    </div>
  );
}

export default App;
