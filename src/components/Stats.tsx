import React from 'react';

const stats = [
  
  {
    number: '7/24',
    label: 'Global Operasyon Desteği',
  },
  {
    number: '100%',
    label: 'Regülasyon Uyumu',
  },
  {
    number: '20+',
    label: 'Hava Aracı Tip Uzmanlığı',
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl sm:text-5xl text-sky-400 mb-2">{stat.number}</div>
              <div className="text-slate-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
