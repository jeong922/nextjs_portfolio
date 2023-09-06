'use client';

import { Nunito } from 'next/font/google';
import { useState, useRef, useEffect } from 'react';

const nunito = Nunito({
  subsets: ['latin'],
});

function useInterval(callback: () => void, delay: number) {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

type Props = {
  typingText: string;
};

export default function Typing({ typingText }: Props) {
  const str = typingText;
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);

  useInterval(() => {
    if (count >= str.length) {
      return;
    }

    setText((prev) => {
      let result = prev ? prev + str[count] : str[0];

      setCount(count + 1);

      return result;
    });
  }, 300);

  return (
    <div
      className={`${nunito.className} text-6xl text-center text-darkModeText font-bold absolute w-full h-full top-0 flex items-center justify-center drop-shadow-xl`}
    >
      <span className='text-4xl sm:text-5xl animate-blink tracking-wide pr-1'>
        {text}
      </span>
    </div>
  );
}
