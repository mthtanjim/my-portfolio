import React,{useState} from 'react';
import './App.scss';
import Header from './components/Header';
import Main from './components/Main'
import Section from './components/Section'
import Projects from './components/Projects';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Tools from './components/Tools';
import Contact from './components/Contact'
import Clients from './components/Clients';
import {BrowserRouter} from 'react-router-dom'

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
