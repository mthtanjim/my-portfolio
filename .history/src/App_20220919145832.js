import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Projects from './components/Projects';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Skills from './components/Skills';
import { ContactMail } from '@material-ui/icons';

function App() {
  
  return (
    <div className='App'>
      {/* <Header/> */}
      <Main/>
      <Section/>
      <Skills/>
      <Projects/>
      <ContactMail
    </div>
  );
}

export default App;
