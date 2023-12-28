export const Container = ({ children }) => {
  return (
    <div className='px-4 py-18 tablet:px-14 tablet:py-28 desktop:px-0 max-w-[1248px] m-auto'>
      {children}
    </div>
  );
};
