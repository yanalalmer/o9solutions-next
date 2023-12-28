export const Header = () => {
  return (
    <header className='py-18 mobile:py-0 mobile:mb-12 tablet:mb-18 desktop:flex desktop:justify-between desktop:items-end desktop:mb-28 desktopL:mb-36'>
      <div>
        <p className='uppercase leading-[110%] tracking-[-0.136px] tablet:text-s tablet:tracking-[-0.16px] mb-6 tablet:mb-8 desktop:mb-6'>
          keynotes and sessions
        </p>
        <h1 className='mb-8 tablet:mb-14 desktop:mb-0 uppercase'>agenda</h1>
      </div>
      <div>toggle button</div>
      <div className='hidden desktop:block leading-[135%]'>
        <span className='block text-right'>Timezone: Europe/</span>
        <span className='block text-right'>Amsterdam</span>
      </div>
    </header>
  );
};
