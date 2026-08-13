'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { muiTheme } from '@/theme/muiTheme';
import ScrollMotion from '@/components/motion/ScrollMotion';

export default function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={muiTheme}><CssBaseline /><ScrollMotion />{children}</ThemeProvider>;
}
