'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Box, Container, Typography, Paper } from '@mui/material';
import {
  SiNextdotjs,
  SiReact,
  SiAngular,
  SiDotnet,
  SiPython,
  SiMysql,
  SiPhp,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
} from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'Angular', icon: SiAngular, color: '#DD0031' },
  { name: 'C#', icon: SiDotnet, color: '#512BD4' },
  { name: 'Python', icon: SiPython, color: '#3776AB' },
  { name: 'SQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'PHP', icon: SiPhp, color: '#777BB4' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098' },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
];

export default function TechStack() {
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      badgesRef.current.forEach((badge, index) => {
        if (badge) {
          // Initial entrance animation
          gsap.fromTo(
            badge,
            {
              opacity: 0,
              scale: 0,
              rotation: -180,
              y: 100,
            },
            {
              opacity: 1,
              scale: 1,
              rotation: 0,
              y: 0,
              duration: 0.8,
              ease: 'elastic.out(1, 0.5)',
              scrollTrigger: {
                trigger: sectionRef.current,
                start: 'top 70%',
                end: 'bottom 30%',
                toggleActions: 'play none none reverse',
              },
              delay: index * 0.1,
              onComplete: () => {
                // Continuous floating animation
                gsap.to(badge, {
                  y: -15,
                  duration: 2 + Math.random() * 2,
                  ease: 'sine.inOut',
                  repeat: -1,
                  yoyo: true,
                  delay: Math.random() * 2,
                });

                // Continuous subtle rotation
                gsap.to(badge, {
                  rotation: 5,
                  duration: 3 + Math.random() * 2,
                  ease: 'sine.inOut',
                  repeat: -1,
                  yoyo: true,
                  delay: Math.random() * 2,
                });

                // Pulse scale effect
                gsap.to(badge, {
                  scale: 1.05,
                  duration: 2.5 + Math.random() * 1.5,
                  ease: 'sine.inOut',
                  repeat: -1,
                  yoyo: true,
                  delay: Math.random() * 2,
                });
              },
            }
          );
        }
      });
    }
  }, []);

  return (
    <Box id="techstack" ref={sectionRef} component="section" sx={{ py: 10, px: 2 }}>
      <Container maxWidth="lg">
        <Typography
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
          Technology Stack
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 3,
          }}
        >
          {technologies.map((tech, index) => (
            <Box
              key={index}
              ref={(el) => {
                badgesRef.current[index] = el;
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    width: 100,
                    height: 100,
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.3s',
                    cursor: 'pointer',
                    background: `radial-gradient(circle, ${tech.color}15, transparent)`,
                    border: `2px solid ${tech.color}40`,
                    '&:hover': {
                      transform: 'scale(1.15) translateY(-8px)',
                      boxShadow: `0 12px 40px ${tech.color}60`,
                      border: `2px solid ${tech.color}`,
                      background: `radial-gradient(circle, ${tech.color}25, transparent)`,
                    },
                    '& .tech-icon': {
                      transition: 'transform 0.3s',
                    },
                    '&:hover .tech-icon': {
                      transform: 'scale(1.3) rotate(360deg)',
                    },
                  }}
                >
                  <tech.icon
                    className="tech-icon"
                    style={{ fontSize: '2.5rem', color: tech.color }}
                  />
                </Paper>
                <Typography
                  variant="body2"
                  fontWeight={600}
                  textAlign="center"
                  sx={{
                    transition: 'color 0.3s',
                    minWidth: 80,
                  }}
                >
                  {tech.name}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
