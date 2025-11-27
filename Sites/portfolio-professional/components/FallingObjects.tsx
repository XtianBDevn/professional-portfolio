'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const emojis = ['🎸', '👾', '🔥', '🚀', '🎸', '👾', '🔥', '🛸', '🎸', '👾'];

interface FallingObject {
  emoji: string;
  x: number;
  y: number;
  speed: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
}

export default function FallingObjects() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const objects: FallingObject[] = [];
    const numObjects = 15;

    // Initialize falling objects
    for (let i = 0; i < numObjects; i++) {
      objects.push({
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * -window.innerHeight - 100,
        speed: Math.random() * 2 + 1,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 5,
        size: Math.random() * 40 + 30,
      });
    }

    // Create DOM elements for each object
    const elements: HTMLDivElement[] = [];
    objects.forEach((obj) => {
      const el = document.createElement('div');
      el.textContent = obj.emoji;
      el.style.position = 'absolute';
      el.style.fontSize = `${obj.size}px`;
      el.style.left = `${obj.x}px`;
      el.style.top = `${obj.y}px`;
      el.style.pointerEvents = 'none';
      el.style.userSelect = 'none';
      el.style.transform = `rotate(${obj.rotation}deg)`;
      el.style.opacity = '0.8';
      el.style.filter = 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))';
      canvasRef.current?.appendChild(el);
      elements.push(el);
    });

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      objects.forEach((obj, index) => {
        obj.y += obj.speed;
        obj.rotation += obj.rotationSpeed;

        // Reset position when object falls off screen
        if (obj.y > window.innerHeight + 100) {
          obj.y = -100;
          obj.x = Math.random() * window.innerWidth;
          obj.emoji = emojis[Math.floor(Math.random() * emojis.length)];
          elements[index].textContent = obj.emoji;
        }

        // Update DOM element
        const el = elements[index];
        if (el) {
          el.style.left = `${obj.x}px`;
          el.style.top = `${obj.y}px`;
          el.style.transform = `rotate(${obj.rotation}deg)`;
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      elements.forEach((el) => el.remove());
    };
  }, []);

  return (
    <Box
      ref={canvasRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -10,
        overflow: 'hidden',
      }}
    />
  );
}
