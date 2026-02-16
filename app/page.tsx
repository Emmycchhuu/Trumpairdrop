'use client';

import Link from 'next/link';

export default function Page() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Image with Blur and Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/branding.jpg)',
          filter: 'blur(8px) brightness(0.3)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-balance">
            Claim Your <span className="text-primary">$100K</span> Airdrop
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-gray-300 mb-12">
            Solana users: Get ready for the biggest token airdrop.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            {/* DM Button */}
            <Link
              href="https://t.me/fighttrumpairdrop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-black font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-xl"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.665 3.717l-17.73 6.837c-1.356.52-1.352 1.597-.165 1.978l4.3 1.345 10.877-6.736c.52-.324.998-.15.998.217v10.591c0 .432-.278.866-.916 1.14l-1.852.924c-.392.196-.528.537-.528.984 0 .726.374 1.047 1.097 1.047.22 0 .444-.03.667-.1l12.8-5.134c1.34-.557 2.021-1.426 2.021-2.856V6.763c0-1.422-.678-2.276-2.021-2.84z"/>
              </svg>
              DM @fighttrumpairdrop
            </Link>

            {/* Community Button */}
            <Link
              href="https://t.me/fighttrmp"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/20 text-white font-bold text-lg px-10 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 border border-primary/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.665 3.717l-17.73 6.837c-1.356.52-1.352 1.597-.165 1.978l4.3 1.345 10.877-6.736c.52-.324.998-.15.998.217v10.591c0 .432-.278.866-.916 1.14l-1.852.924c-.392.196-.528.537-.528.984 0 .726.374 1.047 1.097 1.047.22 0 .444-.03.667-.1l12.8-5.134c1.34-.557 2.021-1.426 2.021-2.856V6.763c0-1.422-.678-2.276-2.021-2.84z"/>
              </svg>
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
