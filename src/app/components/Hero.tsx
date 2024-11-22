
import { motion } from 'motion/react';
import AnimatedButton from '@/app/components/AnimatedButton';


console.log('motion:', motion);

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center text-center text-white"
    >
      <h1 
        className="text-2xl mb-4"
      >
        Welcome to My Portfolio
      </h1>
      <p
        className="text-2xl mb-16"
      >
        Machine Learning Enthusiast | Web Developer | Problem Solver
      </p>
      <AnimatedButton name = "Start your journey" href="/about"/>
    </section>
  );
};

export default Hero;
