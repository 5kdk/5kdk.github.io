import React from 'react';
import Heading from '@theme/Heading';
import { MorphingText } from '@site/src/shared/ui/morphing-text';

const words = [
  'Discover',
  'Design',
  'Develop',
  'Debug',
  'Learn',
  'Observe',
  'Refine',
  'Ship',
] as const;

const BlogHome = () => {
  return (
    <main
      id="tw-scope"
      className="flex min-h-[calc(100vh-var(--ifm-navbar-height,60px))] items-center justify-center overflow-hidden bg-[#fafafa] px-5 text-[#111111] dark:bg-[#050505] dark:text-[#f2efe7]"
    >
      <Heading as="h1" className="sr-only">
        {words.join(' ')}
      </Heading>
      <MorphingText texts={words} />
    </main>
  );
};

export default BlogHome;
