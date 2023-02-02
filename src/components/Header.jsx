import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul className='flex justify-evenly'>
            <li className='btn-header'>
              <a className='cursor-pointer' href='#about'>
                sobre
              </a>
            </li>
            <li className='btn-header'>
              <a href='#skills'>habilidades</a>
            </li>
            <li className='btn-header'>
              <a href='#projects'>projetos</a>
            </li>
            <li className='btn-header'>
              <a href='#contacts'>contatos</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
