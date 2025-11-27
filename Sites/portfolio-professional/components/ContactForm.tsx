'use client';

import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
} from '@mui/material';
import { FaPaperPlane } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState('');

  const formRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const envelopeRef = useRef<HTMLDivElement>(null);
  const envelopeTopRef = useRef<HTMLDivElement>(null);
  const successMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (formRef.current && titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
          delay: 0.3,
        }
      );
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const animateEnvelope = () => {
    const tl = gsap.timeline({
      onComplete: () => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });

        // Show success message
        if (successMessageRef.current) {
          gsap.fromTo(
            successMessageRef.current,
            { opacity: 0, scale: 0, y: 50 },
            { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
          );
        }

        // Reset after 3 seconds
        setTimeout(() => {
          if (envelopeRef.current && formRef.current) {
            gsap.to([envelopeRef.current, successMessageRef.current], {
              opacity: 0,
              duration: 0.5,
              onComplete: () => {
                setStatus('');
                if (formRef.current && envelopeRef.current) {
                  gsap.set(formRef.current, { clearProps: 'all' });
                  gsap.set(envelopeRef.current, { clearProps: 'all' });
                  if (envelopeTopRef.current) {
                    gsap.set(envelopeTopRef.current, { clearProps: 'all' });
                  }
                }
              },
            });
          }
        }, 3000);
      },
    });

    // Step 1: Shrink form
    tl.to(formRef.current, {
      scale: 0.8,
      duration: 0.5,
      ease: 'power2.inOut',
    });

    // Step 2: Transform into envelope shape
    tl.to(formRef.current, {
      borderRadius: '4px',
      duration: 0.3,
    });

    // Step 3: Show envelope
    if (envelopeRef.current) {
      tl.set(envelopeRef.current, { display: 'block' });
      tl.fromTo(
        envelopeRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      );
    }

    // Step 4: Close envelope flap
    if (envelopeTopRef.current) {
      tl.to(envelopeTopRef.current, {
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    }

    // Step 5: Shake slightly (sealing animation)
    tl.to(formRef.current, {
      x: -5,
      duration: 0.05,
      yoyo: true,
      repeat: 5,
    });

    // Step 6: Fly away!
    tl.to(formRef.current, {
      x: window.innerWidth + 200,
      y: -window.innerHeight - 200,
      rotation: 45,
      scale: 0.3,
      duration: 1.5,
      ease: 'power2.in',
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate form submission
    setTimeout(() => {
      animateEnvelope();
    }, 500);
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        minHeight: '100vh',
        py: 10,
        px: 2,
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <Container maxWidth="md">
        <Typography
          ref={titleRef}
          variant="h2"
          component="h2"
          sx={{
            mb: 8,
            textAlign: 'center',
            background: 'linear-gradient(to right, #60a5fa, #00d9ff)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Get In Touch
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Paper
            ref={formRef}
            elevation={3}
            sx={{
              p: 4,
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* Envelope overlay */}
            <Box
              ref={envelopeRef}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                display: 'none',
                pointerEvents: 'none',
                zIndex: 10,
              }}
            >
              {/* Envelope body */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(135deg, #e8e8e8 0%, #d0d0d0 100%)',
                  border: '2px solid #00d9ff',
                  borderRadius: '4px',
                }}
              />

              {/* Envelope flap */}
              <Box
                ref={envelopeTopRef}
                sx={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  background: 'linear-gradient(135deg, #f5f5f5 0%, #e0e0e0 100%)',
                  transformOrigin: 'top center',
                  transform: 'rotateX(-180deg)',
                  backfaceVisibility: 'hidden',
                  borderLeft: '2px solid #00d9ff',
                  borderRight: '2px solid #00d9ff',
                  borderTop: '2px solid #00d9ff',
                  clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
                  boxShadow: '0 4px 8px rgba(0, 217, 255, 0.3)',
                }}
              />

              {/* Address lines */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '60%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 0.5,
                  opacity: 0.6,
                }}
              >
                <Box sx={{ width: 150, height: 2, bgcolor: '#666', borderRadius: 1 }} />
                <Box sx={{ width: 120, height: 2, bgcolor: '#666', borderRadius: 1 }} />
                <Box sx={{ width: 100, height: 2, bgcolor: '#666', borderRadius: 1 }} />
              </Box>

              {/* Stamp */}
              <Box
                sx={{
                  position: 'absolute',
                  top: 20,
                  right: 20,
                  width: 50,
                  height: 40,
                  border: '2px dashed #00d9ff',
                  bgcolor: 'rgba(0, 217, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}
              >
                ✉️
              </Box>
            </Box>

            {/* Form content */}
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ opacity: status === 'sending' ? 0.5 : 1 }}
            >
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                margin="normal"
                variant="outlined"
                disabled={status === 'sending'}
              />

              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                margin="normal"
                variant="outlined"
                disabled={status === 'sending'}
              />

              <TextField
                fullWidth
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                margin="normal"
                variant="outlined"
                multiline
                rows={5}
                disabled={status === 'sending'}
              />

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                disabled={status === 'sending'}
                startIcon={<FaPaperPlane />}
                sx={{
                  mt: 3,
                  py: 1.5,
                  fontSize: '1.1rem',
                }}
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
            </Box>
          </Paper>

          {/* Success message */}
          <Box
            ref={successMessageRef}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              textAlign: 'center',
              opacity: 0,
              pointerEvents: 'none',
              zIndex: 20,
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                textShadow: '0 0 20px rgba(0, 217, 255, 0.5)',
                mb: 2,
              }}
            >
              ✓
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'primary.main',
                fontWeight: 600,
              }}
            >
              Message Sent!
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Thanks for reaching out!
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
