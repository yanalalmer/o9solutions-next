'use client';
import { atom } from 'recoil';

export const filterState = atom({
  key: 'filterState',
  default: 'Day 1',
});
