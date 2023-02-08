import React from 'react';
import Head from 'next/head';
import DrawerAppBar from '../components/DrawerAppBar';
export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }) {
    return (
      <html lang="en">
        <Head />
        <body>
          <DrawerAppBar />
          {children}
        </body>
      </html>
    );
  }