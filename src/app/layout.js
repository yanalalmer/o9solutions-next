import './globals.css';

export const metadata = {
  title: 'o9 Solutions',
  description: 'A calendar app created using NextJS',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
