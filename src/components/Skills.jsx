import React, { Component } from 'react';
import { dataSkills } from '../data';

class Skills extends Component {
  render() {
    return (
      <section className='mt-10' id='skills'>
        <ul className='flex 
              justify-center 
              items-center
              flex-wrap
              p-5 
              gap-10 
            bg-white/[0.15]
              rounded-lg
              shadow-md
              shadow-white/[.1]
              border-2
              border-white/[.3]
              backdrop-blur-sm
           '>
          {dataSkills.map(({ skill, icon }) => (
            <li key={skill} className="text-center">
              <h3 className='text-xl'>{skill}</h3>
              <img className='w-24' src={icon} alt={skill} />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Skills;
