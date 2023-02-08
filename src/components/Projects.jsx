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
            <video className='my-6 border-2 border-white rounded-sm' controls muted>
              <source src={trybeTunes} />
            </video>
            <h5 className='flex items-start mb-4'>#React #ClassComponent #Tailwind</h5>
            <div className='flex gap-2 justify-center'>
            <a
              className='btn-video glass'
              href='https://trybe-tunes-five.vercel.app'
              target='_blank'>
              Teste aqui!
            </a>
            <a
              className='btn-video glass'
              href='https://github.com/VictorPMello/TrybeTunes'
              target='_blank'>
              Repositório Github
            </a>


            </div>
          </div>
          <div className='video-content'>
            <h3 className='text-cinnabar'>Tryunfo</h3>
            <video className='my-6 border-2 border-white rounded-sm' controls muted>
              <source src={tryunfo} />
            </video>
            <h5 className='flex items-start mb-4'>#React #ClassComponent #Tailwind</h5>
            <div className='flex gap-2 justify-center'>
            <a
              className='btn-video glass'
              href='https://tryunfo-pearl.vercel.app'
              target='_blank'>
              Teste aqui!
            </a>
            <a
              className='btn-video glass'
              href='https://github.com/VictorPMello/Tryunfo'
              target='_blank'>
              Repositório Github
            </a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Projects;
