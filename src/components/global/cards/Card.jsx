'use client';
import { TagButton } from '@/components';
import { formatTime } from '@/utils';

export const Card = ({ block }) => {
  const { startTime, title, speakerList, category } = block.attrs;
  return (
    <div className='bg-cardBackground p-4 tablet:p-6 self-stretch h-full desktop:cursor-pointer'>
      <header className='w-full flex justify-between items-center mb-10'>
        <TagButton content={formatTime(startTime)} />
        <p className='uppercase desktop:hidden'>{category}</p>
      </header>
      {block.attrs.title}
    </div>
  );
};
