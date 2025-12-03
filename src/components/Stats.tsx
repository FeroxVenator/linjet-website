import React from 'react';
import { motion } from 'motion/react';
import { Translations } from '../translations';

interface StatsProps {
  t: Translations;
}

export function Stats({ t }: StatsProps) {
  const stats = [
    {
      number: '7/24',
      label: t.stats.stat1,
    },
    {
      number: '100%',
      label: t.stats.stat2,
    },
    {
      number: '20+',
      label: t.stats.stat3,
    },
    {
      number: '15+',
      label: t.stats.stat4,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl sm:text-5xl text-sky-400 mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
