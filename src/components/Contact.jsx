import React, { Component } from 'react';
import { contactsIcon } from '../data';

class Contact extends Component {
  render() {
    return (
      <section className='text-center' id='contacts'>
        <h2 className='text-2xl'>Vamos Conversar?</h2>

        <div className='my-7 text-xl'>
          <h3><strong className='text-cinnabar'>Email:</strong> victormello7003@hotmail.com</h3>
          <h3><strong className='text-cinnabar'>WhatsApp:</strong> (75) 98216-5634</h3>
        </div>

        <div className='flex justify-center  gap-3 w-full mb-5' >
        {contactsIcon.map(({ name, icon, link }) => (
            <>
              <a className='btn-social' key={name} href={link} target='_blank'>
                {name}
                <img className='w-14' src={icon} alt={`${name} icon`} />
              </a>
            </>
              ))}
          </div>
      </section>
    );
  }
}

export default Contact;
