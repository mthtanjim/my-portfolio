import React,{ useState } from 'react';
import { BrowserRouter } from 'react-router-dom'

import Clients from './components/Clients';
import Contact from './components/Contact'
import Header from './components/Header';
import Main from './components/Main'
import Projects from './components/Projects';
import Section from './components/Section'
import Tools from './components/Tools';
import ImgGallery from './components/ImgGallery';

import './App.scss';
import Strength from "./components/Strength";

function App() {
  
  return (
    <div className='App'>
      {/* <Header/> */}
      <Main/>
      <Strength/>
      <Section/>
      <Tools/>
      <Clients/>
      <Projects/>
      <ImgGallery/>
      <Contact/>
    </div>
  );
}

export default App;
