'use client';

import { useEffect, useRef } from 'react';
import { Box } from '@mui/material';

interface SpaceObject {
  emoji: string;
  x: number;
  y: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  size: number;
  type: 'flying' | 'floating';
  direction: 'left' | 'right';
}

const flyingEmojis = ['🚀', '👾', '🛸'];
const floatingEmojis = ['🧑‍🚀', '👨‍🚀', '👩‍🚀'];

export default function FlyingObjects() {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const objects: SpaceObject[] = [];

    // Create initial flying objects (rockets, aliens, UFOs)
    for (let i = 0; i < 6; i++) {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const startX = direction === 'right' ? -100 : window.innerWidth + 100;

      objects.push({
        emoji: flyingEmojis[Math.floor(Math.random() * flyingEmojis.length)],
        x: startX,
        y: Math.random() * window.innerHeight,
        speedX: direction === 'right' ? Math.random() * 1.5 + 0.5 : -(Math.random() * 1.5 + 0.5),
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: direction === 'right' ? 0 : 180,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: Math.random() * 50 + 40,
        type: 'flying',
        direction,
      });
    }

    // Create initial floating astronauts
    for (let i = 0; i < 3; i++) {
      objects.push({
        emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1,
        size: Math.random() * 40 + 50,
        type: 'floating',
        direction: 'left',
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
      el.style.opacity = obj.type === 'floating' ? '0.7' : '0.8';
      el.style.filter = 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))';
      el.style.transition = 'transform 0.1s linear';
      canvasRef.current?.appendChild(el);
      elements.push(el);
    });

    // Animation loop
    let animationFrameId: number;
    let lastSpawnTime = Date.now();
    let lastAstronautSpawn = Date.now();
    const spawnInterval = 8000; // Spawn new flying object every 8 seconds
    const astronautInterval = 15000; // Spawn new astronaut every 15 seconds

    const spawnFlyingObject = () => {
      const direction = Math.random() > 0.5 ? 'left' : 'right';
      const startX = direction === 'right' ? -100 : window.innerWidth + 100;
      const newObj: SpaceObject = {
        emoji: flyingEmojis[Math.floor(Math.random() * flyingEmojis.length)],
        x: startX,
        y: Math.random() * window.innerHeight,
        speedX: direction === 'right' ? Math.random() * 1.5 + 0.5 : -(Math.random() * 1.5 + 0.5),
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: direction === 'right' ? 0 : 180,
        rotationSpeed: (Math.random() - 0.5) * 2,
        size: Math.random() * 50 + 40,
        type: 'flying',
        direction,
      };

      const el = document.createElement('div');
      el.textContent = newObj.emoji;
      el.style.position = 'absolute';
      el.style.fontSize = `${newObj.size}px`;
      el.style.left = `${newObj.x}px`;
      el.style.top = `${newObj.y}px`;
      el.style.pointerEvents = 'none';
      el.style.userSelect = 'none';
      el.style.transform = `rotate(${newObj.rotation}deg)`;
      el.style.opacity = '0.8';
      el.style.filter = 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))';
      el.style.transition = 'transform 0.1s linear';
      canvasRef.current?.appendChild(el);

      objects.push(newObj);
      elements.push(el);
    };

    const spawnAstronaut = () => {
      const newObj: SpaceObject = {
        emoji: floatingEmojis[Math.floor(Math.random() * floatingEmojis.length)],
        x: Math.random() * window.innerWidth,
        y: -100, // Start from top
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: Math.random() * 0.2 + 0.1, // Slow downward drift
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1,
        size: Math.random() * 40 + 50,
        type: 'floating',
        direction: 'left',
      };

      const el = document.createElement('div');
      el.textContent = newObj.emoji;
      el.style.position = 'absolute';
      el.style.fontSize = `${newObj.size}px`;
      el.style.left = `${newObj.x}px`;
      el.style.top = `${newObj.y}px`;
      el.style.pointerEvents = 'none';
      el.style.userSelect = 'none';
      el.style.transform = `rotate(${newObj.rotation}deg)`;
      el.style.opacity = '0.7';
      el.style.filter = 'drop-shadow(0 0 10px rgba(0, 217, 255, 0.5))';
      el.style.transition = 'transform 0.1s linear';
      canvasRef.current?.appendChild(el);

      objects.push(newObj);
      elements.push(el);
    };

    const animate = () => {
      const now = Date.now();

      // Spawn new flying objects periodically
      if (now - lastSpawnTime > spawnInterval) {
        spawnFlyingObject();
        lastSpawnTime = now;
      }

      // Spawn new astronauts periodically
      if (now - lastAstronautSpawn > astronautInterval) {
        spawnAstronaut();
        lastAstronautSpawn = now;
      }

      objects.forEach((obj, index) => {
        if (obj.type === 'flying') {
          // Flying animation (rockets, UFOs, aliens)
          obj.x += obj.speedX;
          obj.y += obj.speedY;
          obj.rotation += obj.rotationSpeed;

          // Remove object when it flies off screen
          if (
            (obj.direction === 'right' && obj.x > window.innerWidth + 100) ||
            (obj.direction === 'left' && obj.x < -100) ||
            obj.y < -100 ||
            obj.y > window.innerHeight + 100
          ) {
            elements[index]?.remove();
            obj.x = obj.direction === 'right' ? -1000 : window.innerWidth + 1000;
          }
        } else {
          // Floating animation (astronauts)
          obj.x += obj.speedX;
          obj.y += obj.speedY;
          obj.rotation += obj.rotationSpeed;

          // Bounce off edges horizontally
          if (obj.x < -50 || obj.x > window.innerWidth + 50) {
            obj.speedX *= -1;
          }

          // Remove when floats off bottom
          if (obj.y > window.innerHeight + 100) {
            elements[index]?.remove();
            obj.y = window.innerHeight + 200; // Mark for removal
          }
        }

        // Update DOM element
        const el = elements[index];
        if (el && obj.x > -1000 && obj.x < window.innerWidth + 1000) {
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
