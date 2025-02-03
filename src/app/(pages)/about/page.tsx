'use client';
import { motion } from 'framer-motion';
import { MotionWrapper } from '@/components/MotionWrapper';

export default function AboutPage() {
  return (
    <MotionWrapper>
      <section className="py-20 container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">About FBC Projects</h1>
        
        <div className="space-y-8 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            {/* ... rest of the content */}
          </motion.div>

          {/* ... other motion.div elements */}
        </div>
      </section>
    </MotionWrapper>
  );
}