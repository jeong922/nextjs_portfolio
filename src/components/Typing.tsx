'use client';

import TypeIt from 'typeit-react';
import { Nunito } from 'next/font/google';

const nunito = Nunito({
  subsets: ['latin'],
});

export default function Typing() {
  return (
    <div
      className={`${nunito.className} text-5xl text-center text-darkModeText font-bold absolute w-full h-full top-0 flex items-center justify-center`}
    >
      <TypeIt
        getBeforeInit={(instance) => {
          instance.type('Hi,').pause(750).type(` I'm Jeong! `);
          return instance;
        }}
      />
    </div>
  );
}
