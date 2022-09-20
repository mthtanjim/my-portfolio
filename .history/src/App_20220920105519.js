import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Projects from './components/Projects';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Skills from './components/Skills';
import Contact from './components/Contact'

function App() {
  
  return (
    <div className='App'>
      {/* <Header/> */}
      <Main/>
      <Section/>
      <Skills/>
      clients
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
