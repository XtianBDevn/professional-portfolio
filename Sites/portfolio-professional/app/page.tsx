import Navbar from '@/components/Navbar';
import ThreeBackground from '@/components/ThreeBackground';
import FlyingObjects from '@/components/FlyingObjects';
import Hero from '@/components/Hero';
import TechStack from '@/components/TechStack';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <ThreeBackground />
      <FlyingObjects />
      <Hero />
      <TechStack />
      <Projects />
      <Resume />
      <ContactForm />
      <Footer />
    </main>
  );
}
