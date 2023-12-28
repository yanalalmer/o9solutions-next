export const ArrowIcon = ({ black }) => {
  return (
    <svg
      width='100%'
      height='100%'
      viewBox='0 0 40 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='20' cy='20' r='20' fill={black ? '#000' : '#D7FE51'} />
      <path
        d='M13.7895 13.4292L26.3104 13.4792L26.3603 26L24.5624 26.0143L24.6766 16.3401L14.1177 26.899L12.8835 25.6647L23.4495 15.0987L13.7753 15.2128L13.7895 13.4292Z'
        fill={black ? '#fff' : '#000'}
      />
    </svg>
  );
};
