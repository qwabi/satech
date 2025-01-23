import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const taglines = [
  'Your Trusted DStv Installation Experts',
  'Fast and Reliable Service',
  'Certified Technicians',
  'Affordable Rates',
  'Customer Satisfaction Guaranteed',
];

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentTagline, setCurrentTagline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTagline((prev) => (prev + 1) % taglines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id='hero'
      className='relative min-h-screen flex items-center justify-center overflow-hidden bg-primary'
    >
      <div className='absolute inset-0 z-0'>
        <div className='w-full h-full bg-primary opacity-90' />
      </div>
      <div className='container mx-auto px-4 z-10 py-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          <motion.div
            className='md:w-1/2 text-center md:text-left'
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className='text-5xl md:text-6xl font-bold text-white mb-4'>
              SA Tech DStv Installers
            </h1>
            <motion.p
              key={currentTagline}
              className='text-3xl md:text-3xl text-secondary mb-8 h-16'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {taglines[currentTagline]}
            </motion.p>
            <motion.a
              href='#book-consultation'
              className='bg-secondary text-primary px-8 py-3 rounded-full text-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 inline-block'
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Consultation
            </motion.a>
          </motion.div>
          <motion.div
            className='md:w-1/2 grid grid-cols-2 gap-4'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={
              inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
            }
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className='h-[200px] rounded-lg overflow-hidden shadow-lg'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/lgt4QePoQAyNiUgT2MjP_MC_Installers_landing_page_1-dqElSYvOjVQ13jC8NkUG0IgUHoUlGS.png'
                alt='DStv Professional Technician'
                responsive
                className='relative object-cover h-full w-full'
              />
            </div>
            <div className='relative h-[200px] rounded-lg overflow-hidden shadow-lg'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DStv-installer-Durban.jpg-wcBS3AQH8gPMOluCMIbMeddNhoVfym.jpeg'
                alt='DStv Equipment'
                responsive
                className='object-cover h-full w-full'
              />
            </div>
            <div className='h-[200px] rounded-lg overflow-hidden shadow-lg'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-21%20at%2007.34.54-RTwRnF3QggVOM4gNbRwvnueHAemQqD.jpeg'
                alt='Professional Installation'
                responsive
                className='object-cover h-full w-full'
              />
            </div>
            <div className='relative h-[200px] rounded-lg overflow-hidden shadow-lg'>
              <img
                src='https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1.jpg-R17owZO7aIXwCqyxK2PslNTKMzyCHD.jpeg'
                alt='DStv Equipment Set'
                responsive
                className='object-cover h-full w-full'
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
