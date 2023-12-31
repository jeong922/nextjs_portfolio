'use client';

import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function TopButton() {
  const [showButton, setShowButton] = useState(false);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const getScrollState = () => {
    window.scrollY >= 100 ? setShowButton(true) : setShowButton(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', getScrollState);
    return () => {
      window.removeEventListener('scroll', getScrollState);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`${
        showButton ? 'scale-100' : 'scale-0'
      } sticky z-10 float-right p-2 bg-white border rounded-full border-neutral-300 right-8 bottom-8 text-neutral-600 text-2xl shadow-lg transition-all duration-300 ease-in-out`}
    >
      <MdKeyboardArrowUp />
    </button>
  );
}
