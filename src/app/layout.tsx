import React from 'react';
import type { Metadata, Viewport } from 'next';
import '../styles/tailwind.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: 'SP Foam Centre — The Aubrey Sofa | Premium Custom Furniture',
  description: 'Discover the Aubrey Sofa by SP Foam Centre. Mid-century modern design with 200+ fabric options, free in-home delivery, and a limited lifetime warranty.',
  openGraph: {
    title: 'SP Foam Centre — Aubrey Sofa',
    description: 'Mid-century modern sofa with 200+ fabric choices and lifetime warranty.',
    images: [{ url: '/assets/images/app_logo.png', width: 1200, height: 630 }],
  },
  icons: {
    icon: [{ url: '/favicon.ico', type: 'image/x-icon' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}

        <script type="module" async src="https://static.rocket.new/rocket-web.js?_cfg=https%3A%2F%2Fjoybirdlux7178back.builtwithrocket.new&_be=https%3A%2F%2Fappanalytics.rocket.new&_v=0.1.17" />
        <script type="module" defer src="https://static.rocket.new/rocket-shot.js?v=0.0.2" /></body>
    </html>
  );
}