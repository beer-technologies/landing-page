import { SectionWrapper } from '@/components/ui/SectionWrapper';

export function OurStorySection() {
  return (
    <SectionWrapper id="our-story" bgColor="bg-warm-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-8 text-center tracking-tight">
          Our Story
        </h2>

        <div className="space-y-5 text-lg text-gray-700 leading-relaxed">
          <p>
            Be&apos;er Technologies was born from a simple but urgent realization:
            across Africa, millions of young people are eager to succeed, but lack
            access to the skills, mentorship, and opportunities needed to thrive in
            today&apos;s digital economy.
          </p>
          <p>
            We saw the disconnect between traditional education and real-world
            employment — and we chose to build a solution that is practical, modern,
            and outcome-driven.
          </p>
          <p>
            What started as a vision to train a few has grown into a mission to raise
            a generation of builders, innovators, and problem-solvers equipped for
            global relevance.
          </p>
          <blockquote className="relative bg-brand-blue/5 rounded-xl p-6 md:p-8 mt-8 border-l-4 border-brand-blue">
            <span className="absolute top-1 left-3 text-6xl text-brand-blue/20 font-serif leading-none" aria-hidden="true">
              &ldquo;
            </span>
            <p className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-snug">
              We don&apos;t just teach technology. We build capability, confidence
              and careers.
            </p>
          </blockquote>
        </div>
      </div>
    </SectionWrapper>
  );
}
