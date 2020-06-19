import React from 'react';
import './App.css';

import {
  Header, 
  Banner,
  About,
  Showcase,
  Resume,
  Footer
} from "./views"

const App = () => {
  return (
    <div className="App">
      <Header banner={<Banner/>}/>
      <About/>
      <Showcase/>
      <Resume/>
      <Footer/>
    </div>
  );
}

export default App;
