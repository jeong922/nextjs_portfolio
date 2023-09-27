import LoadingSpinner from '@/components/LoadingSpinner';
import React from 'react';

export default function loading() {
  return (
    <div className='fixed top-0 left-0 z-10 flex items-center justify-center w-full h-screen'>
      <LoadingSpinner />
    </div>
  );
}
