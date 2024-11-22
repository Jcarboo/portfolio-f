"use client"; 

import React, { useEffect } from 'react';
import styles from '../styles/GoldRain.module.css';


const GoldRain: React.FC = () => {
  useEffect(() => {
    const container = document.querySelector('.gold-rain');

    // Generate droplets dynamically
    for (let i = 0; i < 50; i++) {
      const droplet = document.createElement('span');
      droplet.classList.add(styles.droplet);

      // Randomize 
      droplet.style.left = `${Math.random() * 100}%`;
      droplet.style.animationDelay = `${Math.random() * 5}s`;
      droplet.style.width = `${Math.random() * 5 + 5}px`;
      droplet.style.height = droplet.style.width;

      container?.appendChild(droplet);
    }
  }, []);

  return <div className={`${styles.goldRain} gold-rain`}></div>;
};

export default GoldRain;
