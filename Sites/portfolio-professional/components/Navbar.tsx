'use client';

import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useScrollTrigger,
} from '@mui/material';
import {
  FaBars,
  FaCode,
  FaProjectDiagram,
  FaFileAlt,
  FaEnvelope
} from 'react-icons/fa';

const navItems = [
  { label: 'Tech Stack', href: '#techstack', icon: FaCode },
  { label: 'Projects', href: '#projects', icon: FaProjectDiagram },
  { label: 'Resume', href: '#resume', icon: FaFileAlt },
  { label: 'Contact', href: '#contact', icon: FaEnvelope },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: 'primary.main' }}>
        CB
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              sx={{
                textAlign: 'center',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: 1,
              }}
              onClick={() => scrollToSection(item.href)}
            >
              <item.icon />
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          background: trigger
            ? 'rgba(10, 10, 10, 0.95)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(10px)' : 'none',
          boxShadow: trigger ? '0 4px 30px rgba(0, 217, 255, 0.1)' : 'none',
          borderBottom: trigger ? '1px solid rgba(0, 217, 255, 0.2)' : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              background: 'linear-gradient(to right, #60a5fa, #00d9ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              fontSize: '1.5rem',
            }}
          >
            CB
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                onClick={() => scrollToSection(item.href)}
                startIcon={<item.icon />}
                sx={{
                  color: 'text.primary',
                  mx: 1,
                  '&:hover': {
                    color: 'primary.main',
                    backgroundColor: 'rgba(0, 217, 255, 0.1)',
                    '& .MuiButton-startIcon': {
                      transform: 'scale(1.2) rotate(5deg)',
                    },
                  },
                  '& .MuiButton-startIcon': {
                    transition: 'transform 0.3s ease',
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <FaBars />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Toolbar /> {/* Spacer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: 240,
            background: 'rgba(10, 10, 10, 0.98)',
            backdropFilter: 'blur(10px)',
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}
