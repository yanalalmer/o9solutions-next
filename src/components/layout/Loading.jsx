'use client';
import { motion, useAnimate } from 'framer-motion';
import React from 'react';

export const Loading = () => {
  const text = 'Loading o9 Solutions Agenda';
  const characters = text.split('');

  const radius = 80;
  const letterSpacing = 12.5;

  const [scope, animate] = useAnimate();

  React.useEffect(() => {
    const animateLoader = async () => {
      const letterAnimation = [];
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 0 },
          { duration: 0.3, at: i === 0 ? '+0.8' : '-0.28' },
        ]);
      });
      characters.forEach((_, i) => {
        letterAnimation.push([
          `.letter-${i}`,
          { opacity: 1 },
          { duration: 0.3, at: i === 0 ? '+0.8' : '-0.28' },
        ]);
      });
      animate(letterAnimation, {
        ease: 'linear',
        repeat: Infinity,
      });
      animate(
        scope.current,
        { rotate: 360 },
        { duration: 4, ease: 'linear', repeat: Infinity }
      );
    };
    animateLoader();
  }, []);

  return (
    <div className='h-full w-full flex justify-center items-center'>
      <motion.div
        ref={scope}
        className='relative aspect-square'
        style={{ width: radius * 2 }}
      >
        <p aria-label={text} />
        <p aria-hidden='true' className='text'>
          {characters.map((ch, i) => (
            <motion.span
              key={i}
              className={`letter-${i} absolute top-0 left-[50%] font-o9Sans text-black`}
              style={{
                transformOrigin: `0 ${radius}px`,
                transform: `rotate(${i * letterSpacing}deg)`,
              }}
            >
              {ch}
            </motion.span>
          ))}
        </p>
      </motion.div>
    </div>
  );
};
