'use client';
import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/MotionWrapper';

const services = [
  { title: 'Construction', description: 'Full-service construction solutions' },
  { title: 'Renovation', description: 'Modernization & upgrades' },
  { title: 'Consulting', description: 'Expert project guidance' },
];

export default function ServicesPage() {
  return (
    <MotionWrapper>
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </MotionWrapper>
  );
}