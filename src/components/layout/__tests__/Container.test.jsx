import React from 'react';
import { render, screen } from '@testing-library/react';
import { Container, Header } from '@/components';
import { RecoilRoot } from 'recoil';

describe('Container', () => {
  it('renders properly with children', () => {
    render(
      <RecoilRoot>
        <Container>
          <Header />
        </Container>
      </RecoilRoot>
    );
    expect(screen.getByText('keynotes and sessions')).toBeInTheDocument();
    expect(screen.getByText('agenda')).toBeInTheDocument();
    expect(screen.getByText('Timezone: Europe/')).toBeInTheDocument();
    expect(screen.getByText('Amsterdam')).toBeInTheDocument();
  });

  it('renders properly without children', () => {
    render(<Container />);
  });
});
