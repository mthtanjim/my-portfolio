import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import React,{ useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Clients from './components/Clients';
import Contact from './components/Contact'
import Header from './components/Header';
import Main from './components/Main'
import Projects from './components/Projects';
import Section from './components/Section'
import Tools from './components/Tools';

import './App.scss';

function App() {
  
  return (
    <div className='App'>
      {/* <Header/> */}
      <Main/>
      <Section/>
      <Tools/>
      <Clients/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
