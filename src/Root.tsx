import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { App } from './components/App';
import { OneMatrixOperationsProvider } from './components/OneMatrixOperations';
import { TwoMatrixOperationsProvider } from './components/TwoMatrixOperations';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fff2fd',
      light: '#fffafe',
      dark: '#cf72c1',
      contrastText: '#000000bf'
    },
    secondary: {
      main: '#f7f5ff',
      contrastText: '#000000bf'
    }
  }
});

export const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <TwoMatrixOperationsProvider>
        <OneMatrixOperationsProvider>
          <App />
        </OneMatrixOperationsProvider>
      </TwoMatrixOperationsProvider>
    </ThemeProvider>
  );
};
