import React from 'react';
import JSIcon from './icon/JSIcon';
import TSIcon from './icon/TSIcon';
import ReactIcon from './icon/ReactIcon';
import NextJSIcon from './icon/NextJSIcon';

const data = [
  { category: 'JavaScript', icon: <JSIcon /> },
  { category: 'TypeScript', icon: <TSIcon /> },
  { category: 'React', icon: <ReactIcon /> },
  { category: 'NextJS', icon: <NextJSIcon /> },
];

export default function Skills() {
  return (
    <div className='max-w-screen-md p-4 flex flex-col justify-center items-center'>
      <ul className='grid md:grid-cols-4 grid-cols-2 gap-6'>
        {data.map((item) => (
          <li
            key={item.category}
            className='w-32 h-32 rounded-full bg-neutral-50 shadow-lg flex flex-col items-center justify-center'
          >
            <div className='text-4xl mb-1'>{item.icon}</div>
            <span className='text-sm text-black'>{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
