import Header from '@/react-app/components/Header';
import Hero from '@/react-app/components/Hero';
import Services from '@/react-app/components/Services';

import FAQ from '@/react-app/components/FAQ';
import Contact from '@/react-app/components/Contact';
import Footer from '@/react-app/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
