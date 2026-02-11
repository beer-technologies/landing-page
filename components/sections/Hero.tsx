import { Button } from '@/components/ui/Button';

const shapes = [
  // Large circles
  {
    className: 'w-40 h-40 rounded-full bg-white/[0.04] animate-float-slow',
    style: { top: '8%', left: '3%' },
  },
  {
    className: 'w-56 h-56 rounded-full bg-white/[0.03] animate-float-medium',
    style: { bottom: '10%', right: '5%', animationDelay: '3s' },
  },
  {
    className: 'w-48 h-48 rounded-full bg-white/[0.03] animate-float-slow',
    style: { top: '15%', right: '12%', animationDelay: '5s' },
  },

  // Medium circles
  {
    className: 'w-24 h-24 rounded-full bg-white/[0.06] animate-float-medium',
    style: { top: '35%', left: '18%', animationDelay: '2s' },
  },
  {
    className: 'w-28 h-28 rounded-full bg-white/[0.04] animate-float-diagonal',
    style: { top: '12%', left: '55%', animationDelay: '4s' },
  },

  // Diamonds (rotated squares)
  {
    className: 'w-20 h-20 rotate-45 bg-white/[0.04] animate-float-diagonal',
    style: { top: '28%', right: '20%', animationDelay: '2s' },
  },
  {
    className: 'w-14 h-14 rotate-45 bg-white/[0.05] animate-float-slow',
    style: { bottom: '40%', left: '12%', animationDelay: '6s' },
  },

  // Outlined shapes
  {
    className:
      'w-24 h-24 rounded-full border-2 border-white/[0.06] animate-float-slow',
    style: { top: '70%', right: '10%', animationDelay: '7s' },
  },
  {
    className:
      'w-32 h-32 rounded-full border border-white/[0.04] animate-float-medium',
    style: { top: '5%', left: '42%', animationDelay: '5s' },
  },

  // Burgundy accent shape
  {
    className: 'w-20 h-20 rounded-full bg-brand-burgundy/15 animate-float-slow',
    style: { bottom: '30%', left: '30%', animationDelay: '8s' },
  },

  // Hexagon (via clip-path)
  {
    className: 'w-20 h-20 bg-white/[0.04] animate-float-diagonal',
    style: {
      top: '18%',
      right: '30%',
      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
      animationDelay: '6s',
    },
  },
];

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-linear-to-br from-brand-blue to-brand-blue-secondary" />

      {/* Geometric decorations */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {shapes.map((shape, i) => (
          <div
            key={i}
            className={`absolute ${shape.className}`}
            style={shape.style}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-6 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
          {['Empowering', 'Africa', 'Through', 'Digital', 'Mastery'].map(
            (word, i) => (
              <span
                key={word}
                className="inline-block animate-hero-fade-up"
                style={{ animationDelay: `${0.1 + i * 0.12}s` }}
              >
                {word}
                {i < 4 && <>&nbsp;</>}
              </span>
            ),
          )}
        </h1>
        <p
          className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10 animate-hero-fade-up"
          style={{ animationDelay: '0.75s' }}
        >
          Industry-aligned digital skills training that bridges the gap between
          learning and employability across Africa at scale.
        </p>
        <div className="animate-hero-fade-up" style={{ animationDelay: '1s' }}>
          <Button variant="outline" size="lg" href="#waitlist">
            Join the Waitlist
          </Button>
        </div>
        <p
          className="text-white/60 text-sm mt-6 animate-hero-fade-up"
          style={{ animationDelay: '1.2s' }}
        >
          6 programs &middot; Beginner to advanced &middot; Online &amp; onsite
        </p>
      </div>
    </section>
  );
}
