import Head from 'next/head';
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import {
  Phone,
  Tv,
  Satellite,
  PenToolIcon as Tool,
  CheckCircle,
  ArrowRight,
  Star,
} from 'lucide-react';
import { useCallback } from 'react';
import Link from 'next/link';

const DstvInstallationPage = () => {
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
          Professional DStv Installation Services in South Africa | SA Tech DStv
          Installers
        </title>
        <meta
          name='description'
          content='Expert DStv installation, repair, and maintenance services across South Africa. Fast, reliable, and high-quality service for all types of DStv decoders.'
        />
        <link
          rel='canonical'
          href='https://satechdstv.ayabonga.com/dstv-installation'
        />
        <meta
          property='og:title'
          content='Professional DStv Installation Services in South Africa | SA Tech DStv Installers'
        />
        <meta
          property='og:description'
          content='Expert DStv installation, repair, and maintenance services across South Africa. Fast, reliable, and high-quality service for all types of DStv decoders.'
        />
        <meta
          property='og:url'
          content='https://satechdstv.ayabonga.com/dstv-installation'
        />
        <meta property='og:type' content='website' />
        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "DStv Installation Services",
              "provider": {
                "@type": "LocalBusiness",
                "name": "SA Tech DStv Installers",
                "telephone": "+27 63 516 8461",
                "areaServed": "South Africa"
              },
              "serviceType": "DStv Installation",
              "description": "Professional DStv installation, repair, and maintenance services across South Africa."
            }
          `}
        </script>
      </Head>

      {/* Hero Section */}
      <section className='relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden'>
        <Image
          src='https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
          alt='DStv Installation'
          layout='fill'
          objectFit='cover'
          quality={100}
          priority
        />
        <div className='absolute inset-0 bg-black bg-opacity-50'></div>
        <div className='relative z-10 text-center text-white px-4 flex-col items-center justify-center'>
          <h1 className='text-4xl md:text-5xl font-bold my-8'>
            Professional DStv Installation Services
          </h1>
          <p className='text-xl mb-8'>Expert DStv Installers You Can Trust</p>
          <Link href='/#book-consultation'>
            <Button size='lg' className='bg-primary hover:bg-primary/90  p-4'>
              <span className='w-full h-full flex items-center'>
                Get a Free Quote <ArrowRight className='ml-2' />
              </span>
            </Button>
          </Link>
        </div>
      </section>

      <main className='container mx-auto px-4 py-12'>
        <Card className='mb-8'>
          <CardContent className='pt-6'>
            <h2 className='text-2xl font-semibold my-8'>
              SA Tech DStv Installers: Your Go-To Provider
            </h2>
            <p className='my-8'>
              SA Tech DStv Installers is your trusted provider for professional
              DStv installation, repair, and maintenance services across South
              Africa. Our skilled technicians specialize in installing and
              setting up all types of DStv decoders, including Explora, HD PVR,
              Extra View, and Standard Decoders.
            </p>
            <p>
              Whether you need a new installation, troubleshooting for a signal
              issue, or a complete satellite dish setup, we ensure fast,
              reliable, and high-quality service.
            </p>
          </CardContent>
        </Card>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold my-8'>
            Why Choose SA Tech DStv Installers?
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[
              {
                icon: <CheckCircle className='text-green-500' />,
                title: 'Certified & Experienced Technicians',
                description:
                  'Our team has extensive experience handling DStv installations, repairs, and maintenance.',
              },
              {
                icon: <CheckCircle className='text-green-500' />,
                title: 'Fast & Reliable Service',
                description:
                  'We offer same-day installation and troubleshooting to ensure minimal downtime.',
              },
              {
                icon: <CheckCircle className='text-green-500' />,
                title: 'Affordable Pricing',
                description:
                  'Get competitive rates without compromising on quality.',
              },
              {
                icon: <CheckCircle className='text-green-500' />,
                title: 'Neat & Professional Workmanship',
                description:
                  'We ensure clean, efficient installations with proper cable management.',
              },
              {
                icon: <CheckCircle className='text-green-500' />,
                title: 'Support for Streaming Services',
                description:
                  'We assist with setting up Netflix, Amazon Prime, Showmax, and OVHD integration.',
              },
            ].map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    {item.icon}
                    <span className='ml-2'>{item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold my-8'>
            Our DStv Installation Services
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {[
              {
                icon: <Tv />,
                title: 'New DStv Decoder Setup',
                description: 'Professional installation of all DStv models.',
              },
              {
                icon: <Satellite />,
                title: 'Satellite Dish Installation & Alignment',
                description:
                  'Optimal positioning for the best signal strength.',
              },
              {
                icon: <Tool />,
                title: 'No Signal & Troubleshooting',
                description:
                  'Quick solutions to restore your viewing experience.',
              },
              {
                icon: <Tv />,
                title: 'DStv Extra View Setup',
                description:
                  'Connect multiple decoders for seamless entertainment.',
              },
              {
                icon: <Satellite />,
                title: 'DStv Relocations & Dish Take-Downs',
                description:
                  'Moving? We safely reinstall your system at your new location.',
              },
              {
                icon: <Tool />,
                title: 'Smart LNB & Cable Replacements',
                description:
                  'Upgrade or replace outdated components for better performance.',
              },
              {
                icon: <Tv />,
                title: 'Additional TV Points & Plug Points',
                description: 'Extend your DStv connection to multiple rooms.',
              },
              {
                icon: <Tv />,
                title: 'TV Wall Mounting',
                description:
                  'Secure and aesthetic TV mounting for the best viewing angles.',
              },
              {
                icon: <Tv />,
                title: 'Surround Sound & Home Theatre Setup',
                description:
                  'Enhance your entertainment experience with expert audio setup.',
              },
            ].map((service, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    {service.icon}
                    <span className='ml-2'>{service.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold my-8'>
            Our Process – Simple & Hassle-Free
          </h2>
          <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {[
              {
                number: '1',
                title: 'Get in Touch',
                description: 'Call or WhatsApp us to schedule an installation.',
              },
              {
                number: '2',
                title: 'Consultation & Quote',
                description:
                  'Our technician will assess your needs and provide a free quote.',
              },
              {
                number: '3',
                title: 'Installation & Setup',
                description:
                  'We arrive on time, complete the job efficiently, and ensure everything works perfectly.',
              },
              {
                number: '4',
                title: 'After-Service Support',
                description:
                  'We provide ongoing support to ensure you always have the best DStv experience.',
              },
            ].map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className='flex items-center'>
                    <span className='w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-2'>
                      {step.number}
                    </span>
                    {step.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold my-8'>Customer Testimonials</h2>
          <div className='grid md:grid-cols-2 gap-4'>
            {[
              {
                name: 'Lebo M.',
                text: 'SA Tech DStv Installers provided a seamless and professional installation. Quick, efficient, and affordable!',
              },
              {
                name: 'Thabo S.',
                text: "Best DStv service I've experienced! They fixed my no-signal issue in no time!",
              },
            ].map((testimonial, index) => (
              <Card key={index}>
                <CardContent className='pt-6'>
                  <div className='flex items-center mb-2'>
                    <Star className='text-yellow-400 fill-current' />
                    <Star className='text-yellow-400 fill-current' />
                    <Star className='text-yellow-400 fill-current' />
                    <Star className='text-yellow-400 fill-current' />
                    <Star className='text-yellow-400 fill-current' />
                  </div>
                  <p className='mb-2'>"{testimonial.text}"</p>
                  <p className='font-semibold'>- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className='my-20'>
          <h2 className='text-3xl font-semibold my-8'>
            Contact SA Tech DStv Installers Today!
          </h2>
          <Card>
            <CardContent className='pt-6'>
              <div className='flex flex-col md:flex-row gap-4 my-8'>
                <Button
                  size='lg'
                  className='flex items-center p-4 text-white'
                  onClick={handleCallWhatsApp}
                >
                  <Phone className='mr-2' />
                  Call/WhatsApp: 063 516 8461
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
              <p className='my-8'>
                <strong>Service Areas:</strong> We operate across South Africa,
                including major cities and suburbs.
              </p>
              <p className='font-semibold'>
                For expert DStv installations and reliable service, choose{' '}
                <strong>SA Tech DStv Installers</strong> – Your Trusted
                Installation Experts! 🚀
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
};

export default DstvInstallationPage;
