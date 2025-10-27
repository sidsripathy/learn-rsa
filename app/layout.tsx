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
      <body className="bg-midnight text-white antialiased">
        <div className="min-h-screen bg-grid bg-[length:100px_100px]">
          <div className="min-h-screen bg-gradient-to-br from-midnight/90 via-circuitry/90 to-midnight/95">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
