'use client';
import { Loading } from '@/components';
import { useGetData } from '@/hooks';
import { useRecoilValue } from 'recoil';
import { agendaState, loadingState, errorState, filterState } from '@/state';

export const Grid = () => {
  useGetData();
  const data = useRecoilValue(agendaState);
  const loading = useRecoilValue(loadingState);
  const error = useRecoilValue(errorState);
  const filter = useRecoilValue(filterState);

  if (loading || !data) {
    return <Loading />;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  const filteredInnerBlocks = data.innerBlocks.filter(
    (block) => block.attrs.day === filter
  );
  return (
    <>
      <div className='gap-6 grid grid-cols-1 tablet:grid-cols-2 desktop:grid-cols-3 desktopL:grid-cols-4'>
        {filteredInnerBlocks.map((block, index) => (
          <div key={index}>{block.attrs.title}</div>
        ))}
      </div>
    </>
  );
};
