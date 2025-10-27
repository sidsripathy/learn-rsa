import type { Metadata } from 'next';
import { Orbitron, Space_Grotesk } from 'next/font/google';
import './globals.css';

const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-display', weight: ['400', '600', '700'] });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-body', weight: ['300', '400', '500', '600', '700'] });

export const metadata: Metadata = {
  title: 'Inter IIIT Hackathon 2024',
  description: 'Retro-futuristic control center for the Inter IIIT Hackathon.',
  metadataBase: new URL('https://inter-iiit-hackathon.example.com'),
  openGraph: {
    title: 'Inter IIIT Hackathon 2024',
    description: 'Experience the retro-futuristic nerve center for the Inter IIIT Hackathon.',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${orbitron.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-slate-950 text-slate-100 antialiased">
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-950/95 to-slate-900/90">
          {children}
        </div>
      </body>
    </html>
  );
}
