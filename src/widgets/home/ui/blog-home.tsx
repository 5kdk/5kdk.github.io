import React from 'react';
import Heading from '@theme/Heading';
import { MorphingText } from '@site/src/shared/ui/morphing-text';

const homeHeading = '5kdk 개발 블로그';

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
      className="relative isolate flex min-h-[calc(100dvh-var(--site-home-header-offset))] flex-col overflow-hidden bg-[#f2efe7] px-5 pt-8 pb-6 text-[#17130f] sm:px-8 sm:pb-8 dark:bg-[#17130f] dark:text-[#ece7db]"
    >
      <div aria-hidden="true" className="home-poster-backdrop -z-10" />
      <div aria-hidden="true" className="home-poster-grain -z-10" />

      <Heading as="h1" className="sr-only">
        {homeHeading}
      </Heading>

      <div className="flex flex-1 items-center justify-center">
        <MorphingText
          texts={words}
          className="text-(--ifm-color-primary) dark:text-(--ifm-color-primary)"
        />
      </div>

      <div className="flex items-end justify-between gap-4 font-['Fira_Code',monospace] text-[0.6875rem] tracking-wide sm:text-xs">
        <p className="m-0">
          a personal dev log
          <br />
          by 5kdk
        </p>
        <p className="m-0 text-right">
          5kdk.github.io
          <br />
          seoul, kr
        </p>
      </div>
    </main>
  );
};

export default BlogHome;
