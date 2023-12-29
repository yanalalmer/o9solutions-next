'use client';
// icons
import { ArrowIcon, RightArrowIcon } from '@/public/icons';
// animations
import { AnimatePresence, motion } from 'framer-motion';
import { pop, rotate } from '@/styles/animations';
// components
import { TagButton, MoreButton } from '@/components';
// utils
import { formatTime } from '@/utils';
import { useModal } from '@/hooks';

export const Card = ({ block }) => {
  const { startTime, title, speakerList, category } = block.attrs;
  const { toggleModal } = useModal();
  return (
    <AnimatePresence>
      <motion.div
        className='bg-cardBackground p-4 tablet:p-6 self-stretch h-full desktop:cursor-pointer hover:scale-[1.03] transition-all duration-300'
        whileHover='animate'
        initial='initial'
        onClick={toggleModal}
      >
        <header className='w-full flex justify-between desktopL:justify-start items-center mb-10'>
          <TagButton content={formatTime(startTime)} />
          <p className='uppercase desktop:hidden desktopL:block desktopL:ml-4'>
            {category}
          </p>
          <motion.div
            className='w-10 h-10 hidden desktop:block'
            variants={rotate}
          >
            <ArrowIcon />
          </motion.div>
        </header>
        <h4 className='mb-8'>{title}</h4>
        <div className='mb-10 desktop:hidden' onClick={toggleModal}>
          <MoreButton text='learn more' icon={<RightArrowIcon />} />
        </div>
        <section className='flex gap-2 overflow-x-auto no-scrollbar scroll whitespace-nowrap scroll-smooth cursor-grab desktop:cursor-pointer'>
          {speakerList.map((speaker, index) => (
            <div key={index} className='h-fit w-[108px]'>
              <span className='w-[108px]'>
                <img
                  src={speaker.image.url}
                  alt={speaker.image.alt}
                  className='object-cover w-full h-[120px] no-drag'
                />
              </span>
              {speaker.company_logo.map((logo, index) => (
                <span
                  key={index}
                  className='h-fit flex justify-start items-center'
                >
                  <img
                    src={logo.mediaUrl}
                    alt='logo'
                    className='object-contain max-h-full max-w-full'
                  />
                </span>
              ))}
            </div>
          ))}
        </section>
      </motion.div>
    </AnimatePresence>
  );
};
