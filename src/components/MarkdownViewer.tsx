'use client';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import Image from 'next/image';
import React from 'react';

type Props = {
  content: string;
};

export default function MarkdownViewer({ content }: Props) {
  return (
    <ReactMarkdown
      className='prose max-w-none px-4 pb-4 dark:text-darkModeText'
      remarkPlugins={[remarkGfm]}
      components={{
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || '');
          return !inline && match ? (
            <SyntaxHighlighter
              language={match[1]}
              PreTag='div'
              {...props}
              style={oneDark}
            >
              {String(children).replace(/\n$/, '')}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        img: (image) => (
          <Image
            className='bg-neutral-300'
            src={image.src || ''}
            alt={image.alt || ''}
            width={500}
            height={350}
          ></Image>
        ),
        a: ({ ...props }) => <a {...props} className='text-blue-600' />,
        h1: ({ ...props }) => (
          <h1 {...props} className='dark:text-darkModeText' />
        ),
        h2: ({ ...props }) => (
          <h2 {...props} className='dark:text-darkModeText' />
        ),
        h3: ({ ...props }) => (
          <h3 {...props} className='dark:text-darkModeText' />
        ),
        strong: ({ ...props }) => (
          <h3 {...props} className='dark:text-darkModeText' />
        ),
        p: React.Fragment,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
