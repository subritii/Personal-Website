import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Placards from './components/Placards';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Placards />
      <Contact />
    </main>
  );
}
