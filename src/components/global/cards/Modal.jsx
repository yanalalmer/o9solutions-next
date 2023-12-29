'use client';
import { MoreButton, TagButton } from '@/components';
import { CloseIcon, PlusIcon } from '@/public/icons';
import profileImg from '@/public/images/profile.png';
import { useModal } from '@/hooks';
import { motion } from 'framer-motion';

export const Modal = () => {
  const { toggleModal } = useModal();

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 bg-black/[0.7] flex justify-center items-center z-30'>
      <motion.div
        className='bg-background p-4 tablet:p-12 relative w-[50%] h-fit'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className='flex items-center justify-between mb-4'>
          <TagButton content={'13:30pm'} />
          <div onClick={toggleModal}>
            <MoreButton icon={<CloseIcon />} text='close' />
          </div>
        </div>
        <div className='text-xxs'>Timezone: Europe/Amsterdam</div>
        <div className='mt-10'>
          <p className='uppercase mb-6'>Keynote</p>
          <h3 className='mb-10'>
            How Generative AI will Transform Planning and Decision-Making
          </h3>
          <p className='mb-8'>
            Join this keynote session to learn why Adidas decided to embark on
            this. the challenges and lessons learned, and the quantifiable
            business value it’s expecting to unlock. Join this keynote session
            to learn why Adidas decided to embark on this transformation
            journey, the challenges and lessons learned, and the quantifiable.
          </p>
        </div>
        <MoreButton icon={<PlusIcon />} text='add to calendar' />
        <div className='mt-18'>
          <p className='uppercase mb-6'>speakers</p>
          <div className='text-xxs grid gap-4 grid-cols-2 tablet:flex tablet:justify-center'>
            {speakers.map((speaker, index) => (
              <div key={index}>
                <img
                  src={profileImg.src}
                  alt='profile image'
                  className='mb-4'
                />
                <p className='mb-3 uppercase'>{speaker.name}</p>
                <p>{speaker.title}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const speakers = [
  {
    img: 'profileImg.src',
    name: 'aashish Kshetry',
    title: 'Chairman and Co-Founder at o9 Solutions',
  },
  {
    img: 'profileImg.src',
    name: 'aashish Kshetry',
    title: 'Chairman and Co-Founder at o9 Solutions',
  },
  {
    img: 'profileImg.src',
    name: 'aashish Kshetry',
    title: 'Chairman and Co-Founder at o9 Solutions',
  },
  {
    img: 'profileImg.src',
    name: 'aashish Kshetry',
    title: 'Chairman and Co-Founder at o9 Solutions',
  },
];
