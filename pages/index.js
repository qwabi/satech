import Head from 'next/head';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutUsSection from '../components/AboutUsSection';
import BookConsultationForm from '../components/BookConsultationForm';
import ContactUsSection from '../components/ContactUsSection';

export default function Home() {
  const siteTitle =
    'SA Tech DStv Installers - Expert DStv Installation & Repair in Queenstown';
  const siteDescription =
    'Certified Accredited DStv installers and technicians in Queenstown, South Africa. We offer expert dish installations, signal repairs, and comprehensive DStv services. Fast, reliable, and affordable.';
  const canonicalUrl = 'https://www.satechdstv.ayabonga.com'; // Replace with your actual domain
  const ogImage = `${canonicalUrl}/og-image.png`; // Replace with your actual OG image path

  return (
    <>
      <Head>
        <title>{siteTitle}</title>
        <meta name='description' content={siteDescription} />
        <link rel='canonical' href={canonicalUrl} />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/favicon/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content={canonicalUrl} />
        <meta property='og:title' content={siteTitle} />
        <meta property='og:description' content={siteDescription} />
        <meta property='og:image' content={ogImage} />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content={canonicalUrl} />
        <meta property='twitter:title' content={siteTitle} />
        <meta property='twitter:description' content={siteDescription} />
        <meta property='twitter:image' content={ogImage} />

        {/* Additional SEO tags */}
        <meta name='robots' content='index, follow' />
        <meta
          name='keywords'
          content='DStv installation, DStv repair, satellite dish, Queenstown, South Africa, TV mounting, signal issues, decoder testing'
        />
        <meta name='author' content='SA Tech DStv Installers' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />

        {/* Structured Data */}
        <script type='application/ld+json'>
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SA Tech DStv Installers",
              "image": "${ogImage}",
              "description": "${siteDescription}",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 Main Street",
                "addressLocality": "Queenstown",
                "addressRegion": "Eastern Cape",
                "postalCode": "5320",
                "addressCountry": "ZA"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -31.8975,
                "longitude": 26.8753
              },
              "url": "${canonicalUrl}",
              "telephone": "+27635168461",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday"
                ],
                "opens": "07:00",
                "closes": "19:00"
              },
              "sameAs": [
                "https://www.facebook.com/satechdstv",
                "https://www.instagram.com/satechdstv",
                "https://www.linkedin.com/company/satechdstv"
              ],
              "priceRange": "$$"
            }
          `}
        </script>
      </Head>
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <AboutUsSection />
        <BookConsultationForm />
        <ContactUsSection />
      </main>
    </>
  );
}
