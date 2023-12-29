'use client';
import { modalState } from '@/state';
import { useRecoilState } from 'recoil';

export const useModal = () => {
  const [modal, setModal] = useRecoilState(modalState);

  const toggleModal = () => {
    setModal(!modal);
  };

  return { modal, toggleModal };
};
