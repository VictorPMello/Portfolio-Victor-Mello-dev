import React, { Component } from 'react';
import trybeTunes from '../video/trybeTunes.mp4';
import tryunfo from '../video/tryunfo.mp4';

class Projects extends Component {
  render() {
    return (
      <section className='my-10 text-center' id='projects'>
        <h2 className='text-3xl mb-5'>Meus Projetos</h2>

        <div className='flex flex-wrap justify-around' >
          <div className='video-content'>
            <h3 className='text-cinnabar'>TrybeTunes</h3>
            <video className='my-6 border-2 border-white rounded-sm' autoPlay loop muted>
              <source src={trybeTunes} />
            </video>
            <a
              className='btn-video'
              href='https://trybe-tunes-five.vercel.app'
              target='_blank'>
              Teste aqui!
            </a>
          </div>
          <div className='video-content'>
            <h3 className='text-cinnabar'>Tryunfo</h3>
            <video className='my-6 border-2 border-white rounded-sm' autoPlay loop muted>
              <source src={tryunfo} />
            </video>
            <a
              className='btn-video'
              href='https://tryunfo-pearl.vercel.app'
              target='_blank'>
              Teste aqui!
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
