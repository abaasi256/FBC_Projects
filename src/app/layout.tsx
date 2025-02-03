import type { Metadata } from 'next';
import '@/styles/globals.css';
import { ThemeProvider } from '@/context/ThemeContext';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'FBC Projects - Construction Experts',
  description: 'South African construction specialists',
};

export default function RootLayout({
  children
}: {
  children: ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
