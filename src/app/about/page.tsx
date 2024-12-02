import Navbar from '@/app/components/Navbar';
import Image from 'next/image';
import AnimatedButton from '../components/AnimatedButton';

export default function About() {
  return (
    <div className="h-screen text-gold">
      <Navbar />
      <div className="flex h-[calc(100%-4rem)] p-8">
        {/* Left 1/3: Image */}
        <div className="flex-shrink-0 w-1/3 flex flex-col items-center justify-center space-y-6">
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={300}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right 2/3: Content */}
        <div className="w-2/3 grid grid-cols-2 grid-rows-2 gap-4 pl-8">
          {/* Top-left square */}
          <div className="flex items-center justify-center text-center">
            <div>
              <h1 className="font-perpetua text-4xl font-medium mb-4">HI, I'M JAYSON CARBOO.</h1>
              <p className="text-lg leading-relaxed font-perpetua">
                A junior at the University of Maryland - College Park, studying Computer Science on the Machine Learning track.
              </p>
            </div>
          </div>

          {/* Top-right square  */}
          <div></div>

          {/* Bottom-left square */}
          <div className="flex items-center justify-center text-center mr-10">
            <AnimatedButton name="Go Home" href="/" />
          </div>

          {/* Bottom-right square */}
          <div className="flex items-center justify-center text-center">
            <div>
              <h1 className="font-perpetua text-4xl font-medium mb-4">A LOVER OF ALL THINGS CS.</h1>
              <p className="font-perpetua text-lg leading-relaxed">
                {'I enjoy the thrill of taking on challenges, which flows into all my passions. Undertaking difficult projects brings me immense joy, enabling me to set audaciousgoals with a smile on my face. When I&apos’m not lounging in my room learning new skills,you can find me on a nighttime stroll listening to music, reading fantasy, orspending a disastrous amount of time at the gym.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
