import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { Grid } from '@/components';
import { useGetData } from '@/hooks';

jest.mock('../../../hooks', () => ({
  ...jest.requireActual('../../../hooks'),
  useGetData: jest.fn(),
}));

describe('Grid', () => {
  it('renders loading state', () => {
    useGetData.mockReturnValueOnce({});
    act(() => {
      render(
        <RecoilRoot>
          <Grid />
        </RecoilRoot>
      );
    });
    expect(screen.getByText('loading....')).toBeInTheDocument();
  });

  it('renders error state', () => {
    useGetData.mockReturnValueOnce({
      error: new Error('Test error'),
    });
    act(() => {
      render(
        <RecoilRoot>
          <Grid />
        </RecoilRoot>
      );
    });
    expect(screen.getByText('Error: Test error')).toBeInTheDocument();
  });

  it('renders data without filtering', () => {
    useGetData.mockReturnValueOnce({
      innerBlocks: [
        { attrs: { day: 'Day 1', title: 'Title 1' } },
        { attrs: { day: 'Day 2', title: 'Title 2' } },
      ],
    });
    act(() => {
      render(
        <RecoilRoot>
          <Grid />
        </RecoilRoot>
      );
    });
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.getByText('Title 2')).toBeInTheDocument();
  });

  it('renders filtered data', () => {
    useGetData.mockReturnValueOnce({
      innerBlocks: [
        { attrs: { day: 'Day 1', title: 'Title 1' } },
        { attrs: { day: 'Day 2', title: 'Title 2' } },
      ],
    });
    act(() => {
      render(
        <RecoilRoot>
          <Grid />
        </RecoilRoot>
      );
    });
    expect(screen.getByText('Title 1')).toBeInTheDocument();
    expect(screen.queryByText('Title 2')).toBeNull();
  });
});
