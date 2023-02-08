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
          {/* //! Colocar "FullStack" no h1 */}
          <Skills />
          <Projects />
          {/* //! Habilitar player, colocar descrição e link pro repositório */}
          <Contact />
          {/* //! Remover link do instagram */}
        </main>
      </>
    );
  }
}

export default App;
