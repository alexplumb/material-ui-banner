import React from 'react';
import { render } from 'react-dom';
import createTheme from '@material-ui/core/styles/createTheme';
import ThemeProvider from '@material-ui/core/styles/ThemeProvider';
import App from './components/App';

const theme = createTheme();

export default render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
