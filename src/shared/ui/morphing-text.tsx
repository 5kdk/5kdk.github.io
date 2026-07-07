import React, { useCallback, useEffect, useRef } from 'react';
import { cn } from '@site/src/shared/utils/cn';

const MORPH_TIME = 1.5;
const COOLDOWN_TIME = 0.5;

type MorphingTextProps = {
  className?: string;
  texts: readonly string[];
};

const getText = (texts: readonly string[], index: number) => {
  return texts[index % texts.length] ?? '';
};

const useMorphingText = (texts: readonly string[]) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const text1Ref = useRef<HTMLSpanElement>(null);
  const text2Ref = useRef<HTMLSpanElement>(null);

  const setStaticText = useCallback(() => {
    const [current1, current2] = [text1Ref.current, text2Ref.current];

    if (!current1 || !current2) {
      return;
    }

    current1.textContent = getText(texts, 0);
    current1.style.filter = 'none';
    current1.style.opacity = '100%';
    current2.textContent = getText(texts, 1);
    current2.style.filter = 'none';
    current2.style.opacity = '0%';
  }, [texts]);

  const setStyles = useCallback(
    (fraction: number) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];

      if (!current1 || !current2 || texts.length === 0) {
        return;
      }

      const nextFraction = Math.min(Math.max(fraction, 0.0001), 1);
      const invertedFraction = 1 - nextFraction;

      current2.style.filter = `blur(${Math.min(8 / nextFraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(nextFraction, 0.4) * 100}%`;

      current1.style.filter = `blur(${Math.min(
        8 / Math.max(invertedFraction, 0.0001) - 8,
        100
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;

      current1.textContent = getText(texts, textIndexRef.current);
      current2.textContent = getText(texts, textIndexRef.current + 1);
    },
    [texts]
  );

  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;

    let fraction = morphRef.current / MORPH_TIME;

    if (fraction > 1) {
      cooldownRef.current = COOLDOWN_TIME;
      fraction = 1;
    }

    setStyles(fraction);

    if (fraction === 1) {
      textIndexRef.current += 1;
    }
  }, [setStyles]);

  const doCooldown = useCallback(() => {
    morphRef.current = 0;

    const [current1, current2] = [text1Ref.current, text2Ref.current];

    if (!current1 || !current2) {
      return;
    }

    current2.style.filter = 'none';
    current2.style.opacity = '100%';
    current1.style.filter = 'none';
    current1.style.opacity = '0%';
  }, []);

  useEffect(() => {
    if (texts.length === 0) {
      return undefined;
    }

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      setStaticText();
      return undefined;
    }

    let animationFrameId = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;
      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) {
        doMorph();
      } else {
        doCooldown();
      }
    };

    timeRef.current = new Date();
    setStyles(0);
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doCooldown, doMorph, setStaticText, setStyles, texts.length]);

  return { text1Ref, text2Ref };
};

const SvgFilters = () => (
  <svg
    aria-hidden="true"
    className="fixed h-0 w-0"
    focusable="false"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <filter id="threshold">
        <feColorMatrix
          in="SourceGraphic"
          type="matrix"
          values="1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 255 -140"
        />
      </filter>
    </defs>
  </svg>
);

export const MorphingText = ({ texts, className }: MorphingTextProps) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);

  if (texts.length === 0) {
    return null;
  }

  return (
    <div
      aria-hidden="true"
      className={cn(
        "relative mx-auto h-14 w-full max-w-5xl text-center font-['Unbounded',sans-serif] text-[2.5rem] leading-none font-normal tracking-normal whitespace-nowrap text-[#111111] filter-[url(#threshold)_blur(0.6px)] sm:h-20 sm:text-[4.75rem] md:h-28 md:text-[6rem] lg:h-32 lg:text-[7.25rem] xl:h-40 xl:text-[8.25rem] dark:text-[#f2efe7]",
        className
      )}
    >
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full"
        ref={text1Ref}
      >
        {texts[0]}
      </span>
      <span
        className="absolute inset-x-0 top-0 m-auto inline-block w-full opacity-0"
        ref={text2Ref}
      >
        {texts[1] ?? texts[0]}
      </span>
      <SvgFilters />
    </div>
  );
};
