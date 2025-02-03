'use client';
import { useForm, ValidationError } from '@formspree/react';
import { MotionWrapper } from '@/components/MotionWrapper';

export default function ContactPage() {
  const [state, handleSubmit] = useForm('YOUR_FORMSPREE_ID');

  return (
    <MotionWrapper>
      <section className="py-20">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <form onSubmit={handleSubmit} className="max-w-lg space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded dark:bg-gray-800"
              required
            />
          </div>
          <div>
            <label className="block mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded dark:bg-gray-800"
              required
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div>
            <label className="block mb-2">Message</label>
            <textarea
              name="message"
              className="w-full p-3 border rounded h-32 dark:bg-gray-800"
              required
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition-colors"
          >
            Send Message
          </button>
        </form>
      </section>
    </MotionWrapper>
  );
}