'use client';
import React from 'react';

export const ToggleButton = () => {
  const [filter, setFilter] = React.useState('Day 1');

  const toggleFilter = () => {
    if (filter === 'Day 1') {
      setFilter('Day 2');
    } else {
      setFilter('Day 1');
    }
  };
  console.log(filter);
  return (
    <>
      <div
        onClick={toggleFilter}
        className='bg-cardBackground rounded-[200px] p-2 flex justify-between items-center cursor-pointer w-fit'
      >
        <span
          className={`uppercase px-6 py-3 rounded-[46px] text-center text-xs transition duration-1000 ${
            filter === 'Day 1' ? 'bg-black text-white' : ''
          }`}
        >
          Day 1
        </span>
        <span
          className={`uppercase px-6 py-3 rounded-[46px] text-center text-xs transition duration-1000 ${
            filter === 'Day 2' ? 'bg-black text-white' : ''
          }`}
        >
          Day 2
        </span>
      </div>
    </>
  );
};
