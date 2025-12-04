import { Leaf, Snowflake, CircleDot, Activity } from 'lucide-react';

const badges = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: '100% Organic',
    description: 'Certified organic grains from trusted farms',
  },
  {
    icon: <Snowflake className="h-8 w-8" />,
    title: 'Cold-Pressed',
    description: 'Milled below 40°C to preserve nutrients',
  },
  {
    icon: <CircleDot className="h-8 w-8" />,
    title: 'Stone-Ground',
    description: 'Traditional milling for authentic taste',
  },
  {
    icon: <Activity className="h-8 w-8" />,
    title: 'Low GI',
    description: 'Slow sugar release for better health',
  },
];

export default function TrustBadges() {
  return (
    <section className="py-16 bg-warm-beige/30 dark:bg-warm-beige/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={badge.title}
              className="flex flex-col items-center text-center p-6"
              data-testid={`badge-trust-${index}`}
            >
              <div className="w-16 h-16 rounded-full bg-wheat/20 flex items-center justify-center mb-4 text-wheat">
                {badge.icon}
              </div>
              <h3 className="font-heading font-bold mb-2">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
