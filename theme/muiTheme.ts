import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#0B1F33',
      light: '#102A43',
      dark: '#071522',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1E5A8A',
      light: '#245F91',
      dark: '#16466C',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#C58A24',
      light: '#E0AF4F',
      dark: '#9D6D1B',
      contrastText: '#0B1F33',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F7F9',
    },
    text: {
      primary: '#102A43',
      secondary: '#667085',
    },
    divider: '#E8EDF2',
  },
  typography: {
    // Inter is loaded from Google Fonts through next/font in app/layout.tsx.
    fontFamily: 'var(--font-inter), Inter, Arial, sans-serif',
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: { fontWeight: 800, letterSpacing: '-0.045em', lineHeight: 1.05 },
    h2: { fontWeight: 800, letterSpacing: '-0.035em', lineHeight: 1.1 },
    h3: { fontWeight: 700, letterSpacing: '-0.02em' },
    button: { textTransform: 'none', fontWeight: 700 },
  },
  shape: { borderRadius: 8 },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '12px 20px',
          transition: 'transform 180ms cubic-bezier(0.23, 1, 0.32, 1), box-shadow 180ms ease',
          '&:hover': { transform: 'translateY(-2px)' },
        },
      },
    },
  },
});
