import './App.css';
import { CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import styled from '@emotion/styled';
import { useState } from 'react';
import { Typography } from '@mui/material';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#2563eb' },
    secondary: { main: '#a54e75' },
    error: { main: '#dc2626' },
    warning: { main: '#d97706' },
    info: { main: '#031e2c' },
    success: { main: '#16a34a' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#7dd3fc' },
    secondary: { main: '#f9a8d4' },
    error: { main: '#f87171' },
    warning: { main: '#fbbf24' },
    info: { main: '#4174b4' },
    success: { main: '#4ade80' },
  },
});

const MyButton = styled('button')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  color: theme.palette.info.main,
  border: 0,
  borderRadius: 5,
  padding: '20px 30px',
  marginLeft: '20px',
  marginTop: '20px',
  cursor: 'pointer',
  transition: 'background-color 0.2s ease, transform 0.2s ease',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
  },
}));

function App() {
  const [modeLight, setModeLight] = useState(true);

  const switchThema = () => {
    setModeLight((prev) => !prev);
  };

  return (
    <ThemeProvider theme={modeLight ? lightTheme : darkTheme}>
      <CssBaseline />
      <div>
        <Typography style={{ marginLeft: '20px', marginTop: '20px', fontSize: '20px' }}>
          {modeLight ? 'Light Theme' : 'Dark Theme'}
        </Typography>
        <MyButton onClick={() => switchThema()}>Change Theme</MyButton>
      </div>
    </ThemeProvider>
  );
}

export default App;
