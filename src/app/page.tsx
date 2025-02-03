'use client';
import { MotionWrapper } from '../components/MotionWrapper';
import Navigation from '@/components/Navigation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Navigation />
      
      <main className="container mx-auto px-4">
        <MotionWrapper>
          <section className="py-20">
            <h1 className="text-4xl font-bold mb-8">Welcome to FBC Projects</h1>
            <p className="text-lg mb-12">Building Excellence Since 2005</p>
            {/* Add more content */}
          </section>
        </MotionWrapper>
      </main>

      <Footer />
    </div>
  );
}
