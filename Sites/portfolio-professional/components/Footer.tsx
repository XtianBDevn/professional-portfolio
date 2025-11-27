'use client';

import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Divider,
  Link as MuiLink,
} from '@mui/material';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(to bottom, rgba(26, 26, 26, 0.5), #000000)',
        borderTop: '1px solid',
        borderColor: 'primary.main',
        borderOpacity: 0.2,
        py: 6,
        px: 2,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center">
          {/* Column 1: Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Contact Information
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <MuiLink
                href="tel:8049724005"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'color 0.3s',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <FaPhone style={{ color: '#00d9ff' }} />
                <Typography variant="body2">804.972.4005</Typography>
              </MuiLink>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'start',
                  gap: 1.5,
                }}
              >
                <FaMapMarkerAlt style={{ color: '#00d9ff', marginTop: 4 }} />
                <Typography variant="body2" color="text.primary">
                  8047 Jahnke Rd.
                  <br />
                  Richmond, VA 23235
                </Typography>
              </Box>

              <MuiLink
                href="mailto:contact@christianbryant.dev"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'color 0.3s',
                  '&:hover': { color: 'primary.main' },
                }}
              >
                <FaEnvelope style={{ color: '#00d9ff' }} />
                <Typography variant="body2">
                  contact@christianbryant.dev
                </Typography>
              </MuiLink>
            </Box>
          </Grid>

          {/* Column 2: Social Links */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <MuiLink
                href="https://github.com/XtianBDevn"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: 'primary.main',
                    '& .social-icon': { transform: 'scale(1.2)' },
                  },
                }}
              >
                <FaGithub
                  className="social-icon"
                  style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                />
                <Typography variant="body2">GitHub</Typography>
              </MuiLink>

              <MuiLink
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: 'primary.main',
                    '& .social-icon': { transform: 'scale(1.2)' },
                  },
                }}
              >
                <FaLinkedin
                  className="social-icon"
                  style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                />
                <Typography variant="body2">LinkedIn</Typography>
              </MuiLink>

              <MuiLink
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                underline="hover"
                color="text.primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                  transition: 'all 0.3s',
                  '&:hover': {
                    color: 'primary.main',
                    '& .social-icon': { transform: 'scale(1.2)' },
                  },
                }}
              >
                <FaFacebook
                  className="social-icon"
                  style={{ fontSize: '1.5rem', transition: 'transform 0.3s' }}
                />
                <Typography variant="body2">Facebook</Typography>
              </MuiLink>
            </Box>
          </Grid>

          {/* Column 3: Google Map */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              color="primary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Location
            </Typography>
            <Box
              sx={{
                borderRadius: 2,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'primary.main',
                borderOpacity: 0.3,
                height: 200,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3166.8472983920817!2d-77.53462842396855!3d37.49658127981102!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b1119c9f8e9c6d%3A0x7c7e8e4b0e5e5e5e!2s8047%20Jahnke%20Rd%2C%20Richmond%2C%20VA%2023235!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Location Map"
              />
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'primary.main', opacity: 0.2 }} />

        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
        >
          &copy; {currentYear} Christian Bryant. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
