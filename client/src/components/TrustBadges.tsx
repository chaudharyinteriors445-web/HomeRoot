/*
import { Leaf, Snowflake, CircleDot, Activity } from 'lucide-react';

const badges = [
  {
    icon: <Leaf className="h-8 w-8" />,
    title: '100% Organic',
    description: 'Certified organic grains from trusted farms',
  },
  {
    icon: <Snowflake className="h-8 w-8" />,
    title: 'Stone Ground',
    description: 'Milled below 40°C to preserve nutrients',
  },
  {
    icon: <CircleDot className="h-8 w-8" />,
    title: 'Stone Ground',
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
*/
import { Leaf, Snowflake, CircleDot, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

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

const badgeVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

export default function TrustBadges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-20 bg-warm-beige/30 dark:bg-warm-beige/10">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1
              }
            }
          }}
        >
          {badges.map((badge, index) => (
            <motion.div 
              key={badge.title}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-white/50 dark:hover:bg-white/10 transition-colors duration-300 cursor-default"
              data-testid={`badge-trust-${index}`}
              variants={badgeVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div 
                className="w-16 h-16 rounded-full bg-wheat/20 flex items-center justify-center mb-4 text-wheat"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {badge.icon}
              </motion.div>
              <h3 className="font-heading font-bold mb-2 text-lg">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
