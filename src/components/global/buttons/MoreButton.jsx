export const MoreButton = ({ icon, text }) => {
  return (
    <button className='flex items-center gap-2 w-fit border-black border-b-[0.8px] cursor-pointer'>
      <span className='text-xxs tablet:text-xs uppercase leading-[20px] mb-1.5'>
        {text}
      </span>
      <span className='mb-1.5 w-[10px] h-[10px] tablet:w-[13px] tablet:h-[13px]'>
        {icon ? icon : ''}
      </span>
    </button>
  );
};
