'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Box,
  Card,
  CardContent,
  CardActions,
  Container,
  Typography,
  Chip,
  IconButton,
  Grid,
} from '@mui/material';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with Next.js, GraphQL, and MongoDB. Features include real-time inventory, payment processing, and admin dashboard.',
    tech: ['Next.js', 'GraphQL', 'MongoDB', 'Stripe'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Task Management System',
    description:
      'Enterprise task management application built with Angular and C#. Includes team collaboration, real-time updates, and analytics.',
    tech: ['Angular', 'C#', '.NET', 'SQL'],
    github: '#',
    demo: '#',
  },
  {
    title: 'AI Content Generator',
    description:
      'AI-powered content generation platform using Python and React. Integrates multiple AI models for text, image, and code generation.',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    github: '#',
    demo: '#',
  },
  {
    title: 'Real-Time Analytics Dashboard',
    description:
      'Data visualization dashboard with real-time updates. Built with Next.js and MySQL for high-performance data processing.',
    tech: ['Next.js', 'MySQL', 'D3.js', 'WebSocket'],
    github: '#',
    demo: '#',
  },
];

export default function Projects() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          {
            opacity: 0,
            y: 100,
            rotateX: -15,
          },
          {
            opacity: 1,
            y: 0,
            rotateX: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.2,
          }
        );
      }
    });
  }, []);

  return (
    <Box id="projects" component="section" sx={{ py: 10, px: 2 }}>
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
          Featured Projects
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Box
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
              >
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography
                      variant="h5"
                      component="h3"
                      gutterBottom
                      sx={{
                        transition: 'color 0.3s',
                        '.MuiCard-root:hover &': {
                          color: 'primary.main',
                        },
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      paragraph
                      sx={{ mb: 3 }}
                    >
                      {project.description}
                    </Typography>

                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.tech.map((tech, i) => (
                        <Chip key={i} label={tech} size="small" />
                      ))}
                    </Box>
                  </CardContent>

                  <CardActions sx={{ px: 2, pb: 2 }}>
                    <IconButton
                      component="a"
                      href={project.github}
                      color="primary"
                      aria-label="view code"
                    >
                      <FaGithub />
                    </IconButton>
                    <Typography variant="caption" sx={{ mr: 2 }}>
                      Code
                    </Typography>

                    <IconButton
                      component="a"
                      href={project.demo}
                      color="primary"
                      aria-label="view demo"
                    >
                      <FaExternalLinkAlt />
                    </IconButton>
                    <Typography variant="caption">Demo</Typography>
                  </CardActions>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
