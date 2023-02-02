import React, { Component } from 'react';
import Photo from '../image/foto.jpeg';

class About extends Component {
  render() {
    return (
      <section id='about' className='text-center my-6 w-full'>
        <h1 className='text-2xl mb-4'>
          Bem vindo, me chamo{' '}
          <strong className='text-keppel'>
            Victor Pinheiro Mello
          </strong>
        </h1>
        <div className='flex justify-center items-center gap-6 px-5'>
          <img
            className='rounded-3xl'
            src={Photo}
            alt='Foto de Victor Pinheiro Mello'
          />
          <p className='w-96 text-right text-xl'>
            Tenho 25 anos e sou de Feira de Santana na Bahia. Conheci
            programação em 2019 quando fiz um curso técnico na minha
            cidade. Meu objetivo porfissional é me tornar uma pessoa
            desenvolvedora web FullStack. Atualmente estou estudando
            na <strong className='text-cinnabar'>Trybe</strong>
          </p>
        </div>
      </section>
    );
  }
}

export default About;
