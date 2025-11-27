'use client';

import { useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Paper,
  Grid,
  Divider,
} from '@mui/material';
import { FaDownload } from 'react-icons/fa';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default function Resume() {
  const resumeRef = useRef<HTMLDivElement>(null);

  const downloadPDF = async () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const canvas = await html2canvas(element, {
      scale: 2,
      backgroundColor: '#1a1a1a',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
    const imgX = (pdfWidth - imgWidth * ratio) / 2;
    const imgY = 0;

    pdf.addImage(
      imgData,
      'PNG',
      imgX,
      imgY,
      imgWidth * ratio,
      imgHeight * ratio
    );
    pdf.save('Christian_Bryant_Resume.pdf');
  };

  return (
    <Box id="resume" component="section" sx={{ py: 10, px: 2 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 6,
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Typography
            variant="h2"
            component="h2"
            sx={{
              background: 'linear-gradient(to right, #60a5fa, #00d9ff)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Resume
          </Typography>
          <Button
            variant="contained"
            size="large"
            startIcon={<FaDownload />}
            onClick={downloadPDF}
            sx={{ px: 4 }}
          >
            Download PDF
          </Button>
        </Box>

        <Paper ref={resumeRef} elevation={3} sx={{ p: { xs: 3, md: 5 } }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h3" component="h3" gutterBottom>
              Christian Bryant
            </Typography>
            <Typography
              variant="h5"
              color="primary"
              gutterBottom
              sx={{ mb: 2 }}
            >
              Full Stack Engineer
            </Typography>
            <Typography variant="body1" color="text.secondary">
              8047 Jahnke Rd, Richmond, VA 23235
            </Typography>
            <Typography variant="body1" color="text.secondary">
              804.972.4005
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h4"
              color="primary"
              gutterBottom
              sx={{ mb: 2 }}
            >
              Professional Summary
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Experienced Full Stack Engineer with expertise in modern web
              technologies including Next.js, React, Angular, Python, C#, and
              various database systems. Passionate about creating scalable,
              high-performance applications with exceptional user experiences.
            </Typography>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h4"
              color="primary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Technical Skills
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Frontend
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body2" color="text.secondary">
                    Next.js
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    React
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    Angular
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Backend
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body2" color="text.secondary">
                    Python
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    C#
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    PHP
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    GraphQL
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Typography variant="h6" gutterBottom>
                  Database
                </Typography>
                <Box component="ul" sx={{ pl: 2 }}>
                  <Typography component="li" variant="body2" color="text.secondary">
                    SQL
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    MySQL
                  </Typography>
                  <Typography component="li" variant="body2" color="text.secondary">
                    MongoDB
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box sx={{ mb: 4 }}>
            <Typography
              variant="h4"
              component="h4"
              color="primary"
              gutterBottom
              sx={{ mb: 3 }}
            >
              Experience
            </Typography>
            <Box>
              <Typography variant="h6" gutterBottom>
                Full Stack Engineer
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Various Projects
              </Typography>
              <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                <Typography component="li" variant="body2" color="text.secondary" gutterBottom>
                  Developed and deployed scalable web applications using modern
                  frameworks
                </Typography>
                <Typography component="li" variant="body2" color="text.secondary" gutterBottom>
                  Implemented responsive designs and interactive user interfaces
                </Typography>
                <Typography component="li" variant="body2" color="text.secondary" gutterBottom>
                  Integrated APIs and managed database systems efficiently
                </Typography>
                <Typography component="li" variant="body2" color="text.secondary" gutterBottom>
                  Collaborated with teams to deliver high-quality software
                  solutions
                </Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 4 }} />

          <Box>
            <Typography
              variant="h4"
              component="h4"
              color="primary"
              gutterBottom
              sx={{ mb: 2 }}
            >
              Education
            </Typography>
            <Typography variant="h6" gutterBottom>
              Computer Science & Software Engineering
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Continuous learning and professional development
            </Typography>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
