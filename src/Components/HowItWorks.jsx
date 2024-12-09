import React from 'react';
import '../styles/howItWorks.scss';

const HowItWorks = () => {
  const pillars = [
    { title: 'Nutrition', description: 'Healthy eating for wellness.' },
    { title: 'Physical Activity', description: 'Exercise to maintain fitness.' },
    { title: 'Restorative Sleep', description: 'Sleep for recovery.' },
    // Add more pillars here
  ];

  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <p>Lifestyle as medicine: The six pillars</p>
      <div className="pillars">
        {pillars.map((pillar, index) => (
          <div key={index} className="pillar-card">
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
