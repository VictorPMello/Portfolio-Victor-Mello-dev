import React, { Component } from 'react';
import Photo from '../image/foto.jpeg';

class About extends Component {
  render() {
    return (
      <section id='about' className='text-center mb-6 w-full'>
        <h1 className='text-2xl py-5 mb-8 bg-white text-black'>
          Dev FullStack{' '}
          <strong className='text-keppel'>
            Victor Mello
          </strong>
        </h1>
        <div className='flex justify-center items-center gap-6 px-5'>
          <img
            className='rounded-3xl'
            src={Photo}
            alt='Foto de Victor Pinheiro Mello'
          />
          <p className='w-96 text-right text-xl'>
            Tenho 26 anos e sou de Feira de Santana na Bahia. Conheci
            programação em 2019 quando fiz um curso técnico na minha
            cidade. Meu objetivo profissional é me tornar uma pessoa
            desenvolvedora web FullStack. Formado no curso de desenvolvimento da <strong className='text-cinnabar'>Trybe</strong>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
