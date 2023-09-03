'use client';

import TypeIt from 'typeit-react';

export default function Typing() {
  return (
    <div className='text-4xl text-center dark:text-darkModeText'>
      <TypeIt
        getBeforeInit={(instance) => {
          instance.type('Hi,').pause(750).type(` I'm Jeong!`);
          return instance;
        }}
      />
    </div>
  );
}
