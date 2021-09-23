import React from 'react';
import { render } from 'react-dom';
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import App from './components/App';

const theme = createTheme();

export default render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
