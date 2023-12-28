import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from '@/components';
import { RecoilRoot } from 'recoil';

describe('Header', () => {
  it('renders properly', () => {
    // Render the Header component
    render(
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    );

    expect(screen.getByText('keynotes and sessions')).toBeInTheDocument();
    expect(screen.getByText('agenda')).toBeInTheDocument();
    expect(screen.getByText('Timezone: Europe/')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
  });
});
