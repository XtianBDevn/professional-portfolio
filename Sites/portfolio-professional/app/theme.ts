'use client';

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#00d9ff',
      light: '#5dffff',
      dark: '#00a7cc',
    },
    secondary: {
      main: '#0ea5e9',
      light: '#38bdf8',
      dark: '#0284c7',
    },
    background: {
      default: '#0a0a0a',
      paper: '#1a1a1a',
    },
    text: {
      primary: '#ededed',
      secondary: '#9ca3af',
    },
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.5rem',
      lineHeight: 1.3,
    },
    h3: {
      fontWeight: 600,
      fontSize: '2rem',
      lineHeight: 1.4,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          border: '1px solid rgba(0, 217, 255, 0.2)',
          transition: 'all 0.3s ease',
          '&:hover': {
            border: '1px solid rgba(0, 217, 255, 0.5)',
            boxShadow: '0 8px 32px rgba(0, 217, 255, 0.2)',
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 32px',
          fontSize: '1rem',
        },
        contained: {
          background: 'linear-gradient(to right, #0ea5e9, #00d9ff)',
          boxShadow: '0 4px 14px rgba(0, 217, 255, 0.3)',
          '&:hover': {
            background: 'linear-gradient(to right, #0284c7, #00a7cc)',
            boxShadow: '0 6px 20px rgba(0, 217, 255, 0.5)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            backgroundColor: 'rgba(0, 217, 255, 0.1)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(10px)',
          background: 'rgba(0, 217, 255, 0.1)',
          border: '1px solid rgba(0, 217, 255, 0.3)',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'linear-gradient(to bottom right, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.02))',
          backdropFilter: 'blur(10px)',
          borderRadius: 16,
          border: '1px solid rgba(0, 217, 255, 0.2)',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'rgba(0, 217, 255, 0.3)',
              borderRadius: 12,
            },
            '&:hover fieldset': {
              borderColor: 'rgba(0, 217, 255, 0.5)',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#00d9ff',
            },
          },
        },
      },
    },
  },
  shape: {
    borderRadius: 16,
  },
});

export default theme;
