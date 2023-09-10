import About from '@/components/About';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'About',
  description: 'about',
};

export default function AboutPage() {
  return (
    <section>
      <About />
    </section>
  );
}
