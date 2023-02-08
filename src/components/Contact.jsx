import React, { Component } from 'react';
import { contactsIcon } from '../data';

class Contact extends Component {
  render() {
    return (
      <section className='text-center' id='contacts'>
        <h2 className='text-2xl'>Vamos Conversar?</h2>

        <div className='my-7 text-xl flex flex-col'>
          <a href='mailto:victormello7003@hotmail.com'>
            <strong className='text-cinnabar'>Email: </strong>victormello7003@hotmail.com
          </a>
          <a 
            href='https://wa.me/5575982165634' 
            target='_blank'>
              <strong className='text-cinnabar'>WhatsApp: </strong>+55 (75) 98216-5634
          </a>
        </div>

        <div className='flex justify-center  gap-3 w-full mb-5' >
        {contactsIcon.map(({ name, icon, link }) => (
            <>
              <a className='btn-social glass' key={name} href={link} target='_blank'>
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
