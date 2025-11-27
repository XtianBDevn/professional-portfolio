'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Box, Typography, Button, Container } from '@mui/material';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Avatar from './Avatar';

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.from(titleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.3,
    })
      .from(
        subtitleRef.current,
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
        },
        '-=0.5'
      )
      .from(
        contactRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.4'
      )
      .from(
        ctaRef.current,
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
        },
        '-=0.4'
      );
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      component="section"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center' }}>
          <Avatar />
          <Typography
            ref={titleRef}
            variant="h1"
            component="h1"
            sx={{
              mb: 3,
              background: 'linear-gradient(to right, #60a5fa, #00d9ff, #14b8a6)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: { xs: '2.5rem', md: '4rem' },
            }}
          >
            Christian Bryant
          </Typography>
          <Typography
            ref={subtitleRef}
            variant="h5"
            component="p"
            color="text.secondary"
            sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' } }}
          >
            Full Stack Engineer | Creating Exceptional Digital Experiences
          </Typography>

          <Box
            ref={contactRef}
            sx={{
              display: 'flex',
              gap: 3,
              justifyContent: 'center',
              alignItems: 'center',
              flexWrap: 'wrap',
              mb: 6,
            }}
          >
            <Box
              component="a"
              href="tel:8049724005"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'text.primary',
                textDecoration: 'none',
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <FaPhone style={{ color: '#00d9ff' }} />
              <Typography variant="body1">804.972.4005</Typography>
            </Box>

            <Typography variant="body1" color="text.secondary">|</Typography>

            <Box
              component="a"
              href="mailto:christian.bryantrva@outlook.com"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                color: 'text.primary',
                textDecoration: 'none',
                transition: 'all 0.3s',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.05)',
                },
              }}
            >
              <FaEnvelope style={{ color: '#00d9ff' }} />
              <Typography variant="body1">christian.bryantrva@outlook.com</Typography>
            </Box>
          </Box>

          <Box
            ref={ctaRef}
            sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={() => scrollToSection('projects')}
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              View Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              onClick={() => scrollToSection('contact')}
              color="primary"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
              }}
            >
              Get In Touch
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
