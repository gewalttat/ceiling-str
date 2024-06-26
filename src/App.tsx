import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Routes from './routes/Routes'
import { MainMenu } from './components/MainMenu/MainMenu';
import light from './videos/light.mp4';


function App() {

  return (
    <div className="App">
      <Router>
      <MainMenu/>
      <video src={light} autoPlay loop muted className='bg_video' playsInline preload='metadata' />
      {Routes}
      </Router>
    </div>
  );
}

export default App;
