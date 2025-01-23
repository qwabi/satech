import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import AboutUsSection from '../components/AboutUsSection';
import BookConsultationForm from '../components/BookConsultationForm';
import ContactUsSection from '../components/ContactUsSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <AboutUsSection />
      <BookConsultationForm />
      <ContactUsSection />
    </>
  );
}
