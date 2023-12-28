'use client';
// animations
import { AnimatePresence, motion } from 'framer-motion';
import { slideIn } from '@/styles/animations';
// components
import { Loading, Card } from '@/components';
// state
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
        <AnimatePresence>
          {filteredInnerBlocks.map((block, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              initial='initial'
              animate='animate'
              exit='exit'
              className={`${
                block.attrs.speakerList.length > 3 ? 'desktop:col-span-2' : ''
              }`}
            >
              <Card block={block} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};
