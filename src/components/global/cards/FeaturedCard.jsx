'use client';
// components
import { TagButton } from '@/components';
// icons
import { ArrowIcon, LogoIcon } from '@/public/icons';
// animations
import { motion } from 'framer-motion';
import { background, pop, rotate } from '@/styles/animations';
// utils
import { formatTime } from '@/utils';

export const FeaturedCard = ({ block }) => {
  const { title, coverImage, startTime } = block.attrs;
  return (
    <motion.div
      className='group p-4 h-full tablet:p-6 self-stretch desktop:cursor-pointer hover:scale-[1.03] transition-all duration-300 relative'
      whileHover='animate'
      initial='initial'
      style={{
        backgroundImage: `url(${coverImage.url})`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <motion.div
        className='desktop:bg-neon w-full h-full top-0 left-0 absolute'
        variants={background}
      ></motion.div>
      <div className='w-full flex justify-between mb-10 z-10'>
        <TagButton content={formatTime(startTime)} />
        <motion.span
          className='hidden desktop:block h-10 w-10 z-20'
          variants={rotate}
        >
          <ArrowIcon black />
        </motion.span>
        <span className='h-10 w-10 desktop:hidden'>
          <ArrowIcon />
        </span>
      </div>
      <div className='z-20 relative'>
        <div className='text-neon'>
          <h2 className='mb-6'>Haegoo Song</h2>
          <h5 className='mb-6 desktop:group-hover:text-black'>{title}</h5>
        </div>
        <div className='bg-neon px-3.5 flex items-center justify-between w-full'>
          <p>Global IBP Lead</p>
          <LogoIcon />
        </div>
      </div>
    </motion.div>
  );
};
