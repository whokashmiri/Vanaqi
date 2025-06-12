import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const stats = [
    {
      value: 336,
      suffix: '+',
      title: 'Your Trusted Interior Design',
      description: 'We take pride in being a trusted name in interior design, delivering exceptional.',
    },
    {
      value: 2,
      suffix: 'M+',
      title: 'Committed to Delivering Results',
      description: "We’ve cleaned over 10,000 homes with a 99% customer satisfaction rate.",
    },
    {
      value: 20,
      suffix: 'K',
      title: 'Designing Beautiful Interiors',
      description: 'Every step of the design process. Trust us to bring your dream space to life.',
    },
  ];

  return (
    <section className="bg-[#f9f5f0] py-16 px-6 md:px-20 text-center" ref={ref}>
      {/* Heading */}
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-black leading-snug">
        Creating Functional, Beautiful, <br /> and Timeless Interiors
      </h2>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto text-left">
        {stats.map((stat, index) => (
          <div key={index}>
            <h3 className="text-4xl md:text-5xl font-bold text-black mb-2">
              {isInView && (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2}
                  separator=","
                />
              )}
              {stat.suffix}
            </h3>
            <p className="font-semibold text-lg mb-2">{stat.title}</p>
            <p className="text-gray-600 text-sm">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
