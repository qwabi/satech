import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen'>
      <Head>
        <title>
          SA Tech DStv Installers - Stay Connected, Stay Entertained
        </title>
        <meta
          name='description'
          content='Certified DStv Installers in Queenstown, South Africa. Expert dish installations, signal repairs, and more.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar />
      <main className='flex-grow'>{children}</main>
      <Footer />
    </div>
  );
}
