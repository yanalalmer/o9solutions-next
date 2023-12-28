import '@/styles/globals.css';
import RecoilRootWrapper from './RecoilRootWrapper';

export const metadata = {
  title: 'o9 Solutions',
  description: 'A calendar app created using NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <RecoilRootWrapper>
        <body>{children}</body>
      </RecoilRootWrapper>
    </html>
  );
}
