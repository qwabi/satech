import Head from 'next/head';
import { places } from '../config/komani_surrounding_areas';
import { flatten } from 'ramda';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../components/ui/card';
import { Button } from '../components/ui/button';
import {
  Phone,
  Tv,
  Satellite,
  PenToolIcon as Tool,
  MapPin,
} from 'lucide-react';
import Link from 'next/link';

const DSTVInstallationPage = ({ area }) => {
  return (
    <>
      <Head>
        <title>DStv Installation in {area} | Call 063 516 8461 </title>
        <meta
          name='description'
          content={`Affordable DStv installation services in ${area}. Expert technicians for satellite dish alignment, extra view setup, and new decoder installations.`}
        />
        <link
          rel='canonical'
          href={`https://satechdstv.ayabonga.com/${area}`}
        />
        <meta
          property='og:title'
          content={`DStv Installation in ${area} | SA Tech DStv Installers`}
        />
        <meta
          property='og:description'
          content={`Affordable DStv installation services in ${area}. Expert technicians for satellite dish alignment, extra view setup, and new decoder installations.`}
        />
        <meta
          property='og:url'
          content={`https://satechdstv.ayabonga.com/${area}`}
        />
        <meta property='og:type' content='website' />
        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SA Tech DStv Installers",
              "description": "Affordable DStv installation services in ${area}",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "${area}",
                "addressCountry": "ZA"
              },
              "telephone": "063 516 8461",
              "url": "https://satechdstv.ayabonga.com/${area}"
            }
          `}
        </script>
      </Head>
      <main className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold mb-6 text-primary'>
          DStv Installation in {area}
        </h1>
        <Card className='mb-8'>
          <CardContent>
            <p className='text-lg mb-4'>
              SA Tech DStv Installers offers affordable DStv installation
              services around {area} daily.
            </p>
            <Link href='tel:063 516 8461'>
              <Button size='lg' className='mb-4 text-white p-4'>
                <Phone className='mr-2 h-4 w-4' /> Call 063 516 8461
              </Button>
            </Link>
            <p>
              We have reliable DStv technicians who can expertly diagnose and
              quickly restore the DStv signal.
            </p>
          </CardContent>
        </Card>

        <section className='mb-8'>
          <h2 className='text-3xl font-semibold mb-4'>
            DStv Approved Installers in {area}
          </h2>
          <p className='mb-4'>
            Our DStv services include satellite dish alignment, extra view
            setup, and new decoder installations. Call us today for a same-day
            affordable DStv repair service.
          </p>
        </section>

        <section className='mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>
            Common {area} DStv Installation Services
          </h3>
          <div className='grid md:grid-cols-2 gap-4'>
            {[
              {
                title: 'Standard Installation',
                icon: <Tv />,
                description:
                  'Set up a DStv decoder and connect it to a single TV point.',
              },
              {
                title: 'Explora Installation',
                icon: <Satellite />,
                description:
                  'Installing a DStv decoder, often includes connecting to multiple TV points and setting up internet connectivity for additional features.',
              },
              {
                title: 'DStv Extra View Installation',
                icon: <Tv />,
                description:
                  'Configuring multiple decoders to work together, allowing the viewing of several channels on different TVs simultaneously.',
              },
              {
                title: 'Dish Installation and Alignment',
                icon: <Satellite />,
                description: 'Installing and aligning the satellite dish.',
              },
              {
                title: 'Upgrades and DStv No Signal Repairs',
                icon: <Tool />,
                description:
                  'Upgrading existing setups or repairing faulty equipment.',
              },
              {
                title: 'Relocation Services',
                icon: <MapPin />,
                description:
                  'Moving DStv equipment to a new location and setting it up again.',
              },
              {
                title: 'TV Wall Mounting',
                icon: <Tv />,
                description:
                  'Mount TVs using various brackets on the walls or ceilings.',
              },
              {
                title: 'Surround Sound Setup',
                icon: <Tv />,
                description:
                  'Connect sound bars and home theatre systems and configure them to the TV system.',
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

        <section className='mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>Extra View Setup</h3>
          <Card>
            <CardContent>
              <p>
                DStv Extra View enables you to link 2 or 3 decoders under a
                single subscription. This means you pay a single subscription
                plus an access fee of R109 for each extra decoder you add to the
                Extra View. However, an accredited installer must connect your
                decoders so that you don't experience the E143 error.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className='mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>
            Fixing DStv Signal Problems
          </h3>
          <Card>
            <CardContent>
              <p className='mb-4'>
                Since your satellite dish is located outside, it can be affected
                by strong winds and rust. When this happens, you experience DStv
                signal problems. You can always tell if you have a signal
                problem if there is an E48-32 error on your TV.
              </p>
              <p>
                We use approved tools to align your satellite dish correctly.
                This is so because we want you to get the best signal for your
                decoder. This allows you to watch HD channels that are free from
                scrambled pictures.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className='mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>TV Wall Mounting</h3>
          <Card>
            <CardContent>
              <p>
                By hiring us, you spare yourself the trouble of mounting your TV
                on the wall. We know the best places to get the correct bracket
                that fits your TV. All you need to do is tell us your TV size
                and where you want it mounted.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className='mb-8'>
          <h3 className='text-2xl font-semibold mb-4'>
            DStv Accredited Installers in {area}
          </h3>
          <Card>
            <CardContent>
              <p className='mb-4'>
                Our DStv installers who work in {area} are certified. Using an
                approved installer means your DStv connection will always be
                done correctly. Using the right tools minimizes the occurrence
                of DStv signal strength and quality problems, making your setup
                robust.
              </p>
              <p>
                If you are looking for an approved DStv installer who works in{' '}
                {area}, then hire us. You can either call us at{' '}
                <strong>063 516 8461</strong> or leave us a message. We promise
                to send you a skilled DStv installer who will do a good job.
              </p>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const areas = flatten([places.towns, places.suburbsAndAreas]);
  const paths = areas.map((area) => ({ params: { area } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { area } = params;
  return { props: { area } };
}

export default DSTVInstallationPage;
