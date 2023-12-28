import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import '@testing-library/react';
import { ToggleButton } from '@/components';

describe('ToggleButton', () => {
  it('renders properly', () => {
    render(
      <RecoilRoot>
        <ToggleButton />
      </RecoilRoot>
    );
  });
  it('toggles the filter state from Day 1 to Day 2', () => {
    render(
      <RecoilRoot>
        <ToggleButton />
      </RecoilRoot>
    );
    fireEvent.click(screen.getByText('Day 1'));
    expect(screen.getByText('Day 2')).toBeInTheDocument();
  });
  it('toggles the filter state from Day 2 to Day 1', () => {
    render(
      <RecoilRoot>
        <ToggleButton />
      </RecoilRoot>
    );
    fireEvent.click(screen.getByText('Day 2'));
    fireEvent.click(screen.getByText('Day 2'));
    expect(screen.getByText('Day 1')).toBeInTheDocument();
  });
});
