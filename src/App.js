import React from 'react';
import "./App.css";
import Header from './Components/Header';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Effect from "./Components/Effect";
import Video from './Components/Video';

const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
      <Effect/>
      <Video/>
    </>
    
    );
}

export default App;
