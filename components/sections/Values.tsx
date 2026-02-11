import { values } from '@/data/values';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { ValueCard } from '@/components/ui/ValueCard';

export function ValuesSection() {
  return (
    <SectionWrapper id="values" bgColor="bg-warm-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4 tracking-tight">
          Our Values
        </h2>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
          The principles that guide everything we do.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {values.map((value) => (
          <ValueCard key={value.title} value={value} />
        ))}
      </div>
    </SectionWrapper>
  );
}
