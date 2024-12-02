import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import GoldRain from '@/app/components/GoldRain';
import 'tailwindcss/tailwind.css';
import '@/app/globals.css';

export default function Home() {
  return (
    <div>
      <GoldRain />
      <Navbar />
      <Hero />
    </div>
  );
}
