import type { Value } from '@/data/values';

interface ValueCardProps {
  value: Value;
}

export function ValueCard({ value }: ValueCardProps) {
  const Icon = value.icon;

  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-blue text-white mb-4">
        <Icon size={28} />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
      <p className="text-sm text-gray-600">{value.description}</p>
    </div>
  );
}
