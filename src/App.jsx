import React, { Component } from 'react';
import About from './components/About';
import Contact from './components/Contact';
// import Header from './components/Header';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import './App.css';

class App extends Component {
  render() {
    return (
      <>
        {/* <Header /> */}
         {/* //! Remover Header */}
        <main className='flex justify-center items-center flex-col'>
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
      </>
    );
  }
}

export default App;
