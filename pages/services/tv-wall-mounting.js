import Head from 'next/head';
import Image from 'next/image';
import { Card, CardContent, CardTitle } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import {
  Phone,
  PenToolIcon as Tool,
  CheckCircle,
  Building,
  Home,
  ArrowRight,
} from 'lucide-react';
import { useCallback } from 'react';
import Link from 'next/link';

const TVWallMountingPage = () => {
  const handleCallWhatsApp = useCallback(async () => {
    window.open('tel:+27635168461', '_self');

    try {
      await fetch('/api/push-whatsapp', { method: 'POST' });
    } catch (error) {
      console.error('Error pushing WhatsApp notification:', error);
    }
  }, []);
  return (
    <>
      <Head>
        <title>
          Affordable TV Wall Mounting Services in South Africa | SA Tech DStv
          Installers
        </title>
        <meta
          name='description'
          content='Expert TV wall mounting services for LCD, LED, Plasma, and Projection TVs. Professional installation, cable management, and custom mounting solutions.'
        />
        <link
          rel='canonical'
          href='https://satechdstv.ayabonga.com/tv-wall-mounting'
        />
        <meta
          property='og:title'
          content='Affordable TV Wall Mounting Services in South Africa | SA Tech DStv Installers'
        />
        <meta
          property='og:description'
          content='Expert TV wall mounting services for LCD, LED, Plasma, and Projection TVs. Professional installation, cable management, and custom mounting solutions.'
        />
        <meta
          property='og:url'
          content='https://satechdstv.ayabonga.com/tv-wall-mounting'
        />
        <meta property='og:type' content='website' />
        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "TV Wall Mounting Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "SA Tech DStv Installers",
                "telephone": "+27 63 516 8461",
                "areaServed": ["Queenstown", "Cofimvaba", "Lady Frere", "Komani Park"]
              },
              "serviceType": "TV Installation",
              "description": "Professional TV wall mounting services for all types of TVs, including custom solutions and cable management."
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <section className='relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          alt='Modern living room with wall-mounted TV'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 text-center text-white px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Expert TV Wall Mounting Services
          </h1>
          <p className='text-xl my-20'>
            Transform Your Space with Professional Installation
          </p>
          <Link href='/#book-consultation'>
            <Button size='lg' className='bg-primary hover:bg-primary/90  p-4'>
              <span className='w-full h-full flex items-center'>
                Get a Free Quote <ArrowRight className='ml-2' />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      <main className='container mx-auto px-4 py-8'>
        <Card className='my-20'>
          <CardContent className='pt-6'>
            <h2 className='text-2xl font-semibold mb-4'>
              Professional TV Installers – SA Tech DStv Installers
            </h2>
            <p className='mb-4'>
              Looking for expert TV wall mounting services? SA Tech DStv
              Installers provides professional TV installation solutions for
              LCD, LED, Plasma, and Projection TVs. Whether you need a custom
              wall mount or ceiling mount, we ensure a seamless, safe, and
              visually appealing setup.
            </p>
            <p>
              Our certified technicians specialize in securely mounting
              flat-screen TVs, concealing cables for a clutter-free space, and
              optimizing your viewing experience.
            </p>
          </CardContent>
        </Card>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold mb-4'>
            Why Choose TV Wall Mounting Over a Stand?
          </h2>
          <Card>
            <CardContent className='pt-6'>
              <p className='mb-4'>
                Mounting your TV enhances your viewing experience by saving
                space, reducing glare, and improving aesthetics. Whether for
                home or business use, we provide reliable installation and
                professional wiring to secure your investment.
              </p>
              <h3 className='text-xl font-semibold mb-2'>
                At SA Tech DStv Installers, we offer:
              </h3>
              <ul className='list-none space-y-2'>
                {[
                  {
                    icon: <CheckCircle className='text-green-500' />,
                    text: 'Secure TV Mounting – We ensure your flat screen is firmly attached to avoid any risks.',
                  },
                  {
                    icon: <CheckCircle className='text-green-500' />,
                    text: 'Cable Management Solutions – We provide hidden wiring options for a sleek, modern look.',
                  },
                  {
                    icon: <CheckCircle className='text-green-500' />,
                    text: 'Premium TV Brackets – Need a wall mount? We supply and install durable mounting brackets.',
                  },
                  {
                    icon: <CheckCircle className='text-green-500' />,
                    text: 'Custom Mounting for Any Surface – Whether drywall, brick, or cement, we have the right tools and expertise.',
                  },
                ].map((item, index) => (
                  <li key={index} className='flex items-center'>
                    {item.icon}
                    <span className='ml-2'>{item.text}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold mb-4'>
            TV Mounting for Homes & Businesses
          </h2>
          <div className='grid md:grid-cols-2 gap-4'>
            <Card className='relative overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
                alt='Home TV Installation'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0'
              />
              <CardContent className='relative z-10 bg-black bg-opacity-50 text-white h-full flex flex-col justify-end p-6'>
                <CardTitle className='flex items-center mb-2'>
                  <Home className='mr-2' />
                  Residential Installations
                </CardTitle>
                <p>Perfect for living rooms, bedrooms, and home theaters.</p>
              </CardContent>
            </Card>
            <Card className='relative overflow-hidden'>
              <Image
                src='https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
                alt='Commercial TV Installation'
                layout='fill'
                objectFit='cover'
                className='absolute inset-0'
              />
              <CardContent className='relative z-10 bg-black bg-opacity-50 text-white h-full flex flex-col justify-end p-6'>
                <CardTitle className='flex items-center mb-2'>
                  <Building className='mr-2' />
                  Commercial Installations
                </CardTitle>
                <p>
                  Ideal for hotels, offices, restaurants, and public spaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold mb-4'>
            Frequently Asked Questions
          </h2>
          <Accordion type='single' collapsible className='w-full'>
            <AccordionItem value='item-1'>
              <AccordionTrigger>
                How long does it take to mount a TV?
              </AccordionTrigger>
              <AccordionContent>
                A standard installation takes about 1-2 hours, depending on the
                wall type, wiring setup, and bracket complexity.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
              <AccordionTrigger>
                What is the best position for mounting a TV?
              </AccordionTrigger>
              <AccordionContent>
                We recommend placing the TV at eye level on a flat surface to
                prevent strain. Measure your space before purchasing a TV to
                ensure a proper fit.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
              <AccordionTrigger>
                How much does TV mounting cost?
              </AccordionTrigger>
              <AccordionContent>
                Costs vary based on the type of mounting brackets, installation
                complexity, and technician fees. We provide affordable packages,
                including bracket supply, HDMI cables, and cable trunking
                solutions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold mb-4'>
            Need a Reliable TV Mounting Expert?
          </h2>
          <Card>
            <CardContent className='pt-6'>
              <p className='mb-4'>
                If you need help with TV installation, contact SA Tech DStv
                Installers today!
              </p>
              <div className='flex flex-col md:flex-row gap-4 mb-4'>
                <Button
                  size='lg'
                  className='flex items-center p-4 text-white'
                  onClick={handleCallWhatsApp}
                >
                  <Phone className='mr-2' />
                  Call/WhatsApp: +27 63 516 8461
                </Button>
                <Link href='/#book-consultation'>
                  <Button
                    size='lg'
                    variant='outline'
                    className='flex items-center p-4'
                  >
                    <Tool className='mr-2' />
                    Request a Quote
                  </Button>
                </Link>
              </div>
              <p className='mb-4'>
                <strong>Service Areas:</strong> Queenstown, Cofimvaba, Lady
                Frere, Komani Park, and surrounding areas
              </p>
              <p className='mb-4'>
                We specialize in installing TV brackets for all screen sizes,
                from 12-inch LCDs to 88-inch Curved Smart TVs. No matter the
                wall type, we ensure a secure and professional installation
                every time.
              </p>
              <p className='font-semibold'>
                👉 Get in touch with us for a hassle-free, affordable TV
                mounting service!
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
};

export default TVWallMountingPage;
