'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Image from 'next/image';
import { Box, IconButton, Tooltip } from '@mui/material';
import {
  FaGithub,
  FaDiscord,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
} from 'react-icons/fa';

const socialLinks = [
  { icon: FaGithub, label: 'GitHub', url: 'https://github.com/XtianBDevn', color: '#00d9ff' },
  { icon: FaDiscord, label: 'Discord', url: 'https://discord.com/users/xtianbdevn', color: '#5865F2' },
  { icon: FaLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/christian-bryant-rva//', color: '#0077B5' },
  { icon: FaFacebook, label: 'Facebook', url: 'https://www.facebook.com/christian.bryant.323305/', color: '#1877F2' },
  { icon: FaInstagram, label: 'Instagram', url: 'https://www.instagram.com/christianbryantmusic/', color: '#E4405F' },
];

export default function Avatar() {
  const avatarRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (avatarRef.current) {
      gsap.fromTo(
        avatarRef.current,
        {
          scale: 0,
          rotation: -180,
          opacity: 0,
        },
        {
          scale: 1,
          rotation: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'back.out(1.7)',
          delay: 0.5,
        }
      );
    }

    // Animate orbiting icons
    if (orbitRef.current) {
      const icons = orbitRef.current.querySelectorAll('.orbit-icon');
      icons.forEach((icon, index) => {
        gsap.fromTo(
          icon,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            delay: 0.8 + index * 0.1,
            ease: 'back.out(1.7)',
          }
        );
      });

      // Continuous rotation animation
      gsap.to(orbitRef.current, {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1,
      });
    }
  }, []);

  const orbitRadius = 150; // Radius of the orbit

  return (
    <Box
      sx={{
        position: 'relative',
        width: { xs: 192, md: 256 },
        height: { xs: 192, md: 256 },
        margin: '0 auto 6rem',
      }}
    >
      <Box
        ref={avatarRef}
        sx={{
          position: 'relative',
          width: { xs: 192, md: 256 },
          height: { xs: 192, md: 256 },
          '&:hover .avatar-glow': {
            opacity: 1,
          },
        }}
      >
        <Box
          className="avatar-glow"
          sx={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, #3b82f6, #00d9ff, #14b8a6)',
            borderRadius: '50%',
            animation: 'spin 3s linear infinite',
            filter: 'blur(20px)',
            opacity: 0.75,
            transition: 'opacity 0.3s',
            '@keyframes spin': {
              from: { transform: 'rotate(0deg)' },
              to: { transform: 'rotate(360deg)' },
            },
          }}
        />
        <Box
          sx={{
            position: 'relative',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid',
            borderColor: 'primary.main',
            boxShadow: '0 20px 60px rgba(0, 217, 255, 0.5)',
          }}
        >
          <Image
            src="/avatar.jpg"
            alt="Christian Bryant"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </Box>
      </Box>

      {/* Orbiting Social Links */}
      <Box
        ref={orbitRef}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: orbitRadius * 2,
          height: orbitRadius * 2,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      >
        {socialLinks.map((social, index) => {
          const angle = (360 / socialLinks.length) * index;
          const angleRad = (angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * orbitRadius;
          const y = Math.sin(angleRad) * orbitRadius + 30; // Offset below equator

          return (
            <Tooltip key={social.label} title={social.label} arrow>
              <IconButton
                className="orbit-icon"
                component="a"
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-angle}deg)`,
                  pointerEvents: 'auto',
                  width: 48,
                  height: 48,
                  background: `linear-gradient(135deg, ${social.color}20, ${social.color}10)`,
                  border: `2px solid ${social.color}`,
                  color: social.color,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: `${social.color}40`,
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) rotate(${-angle}deg) scale(1.2)`,
                    boxShadow: `0 0 20px ${social.color}`,
                  },
                }}
              >
                <social.icon style={{ fontSize: '1.5rem' }} />
              </IconButton>
            </Tooltip>
          );
        })}
      </Box>
    </Box>
  );
}
