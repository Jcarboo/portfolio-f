import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import GoldRain from '@/app/components/GoldRain';
import '@/app/globals.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <GoldRain />
      <Navbar />
      <Hero />
    </div>
  );
}
