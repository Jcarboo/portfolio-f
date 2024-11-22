import React from 'react';
import Link from 'next/link';
import styles from '@/app/styles/AnimatedButton.module.css';

interface AnimatedButtonProps {
  name: string; // Button text
  href: string; // URL for navigation
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ name, href }) => {
    return (
        <div className={styles.container}>
        <a className={styles.button} href={href} style={{ '--color': '#1e9bff' } as React.CSSProperties}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            {name}
        </a>
        </div>
    );
};

export default AnimatedButton;
