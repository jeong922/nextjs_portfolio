import React from 'react';
import JSIcon from './icon/JSIcon';
import TSIcon from './icon/TSIcon';
import ReactIcon from './icon/ReactIcon';
import NextJSIcon from './icon/NextJSIcon';

const data = [
  { category: 'JavaScript', level: '중', icon: <JSIcon /> },
  { category: 'TypeScript', level: '하', icon: <TSIcon /> },
  { category: 'React', level: '중', icon: <ReactIcon /> },
  { category: 'NextJS', level: '하', icon: <NextJSIcon /> },
];

export default function Skills() {
  return (
    <ul className='grid md:grid-cols-4 grid-cols-2 max-w-screen-md  gap-6'>
      {data.map((item) => (
        <li
          key={item.category}
          className='w-32 h-32 rounded-full bg-neutral-50 shadow-lg flex flex-col items-center justify-center'
        >
          <div className='text-4xl'>{item.icon}</div>
          <span className='text-sm text-black'>{item.category}</span>
          <span className='text-xs text-neutral-400'>{item.level}</span>
        </li>
      ))}
    </ul>
  );
}
