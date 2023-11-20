import logo from './logo.svg';
import './App.css';
//import {Router} from '@reach/router';
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import About from './views/About';
// import Dropdown from './dropdownmenu/Dropdown';
import WorksAnim from './views/WorksAnim';
import WorksCode from './views/WorksCode';

import ResumeCode from './views/ResumeCode';
import ResumeAnim from './views/ResumeAnim';

import React from 'react';
// import Example from './views/Example';
import Collapsible from './views/Collapsible';
// import './styles/navigate.css';

import Image from './images/concept1a.jpg';
// import Resume2021c from '../documents/Resume2021c.pdf';
import Resume from './views/Resume';
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/works_anim" element={<WorksAnim/>}/>
          <Route path="/works_code" element={<WorksCode/>}/>
          <Route path="/resume_code" element={<ResumeCode/>}/>
          <Route path="/resume_anim" element={<ResumeAnim/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
