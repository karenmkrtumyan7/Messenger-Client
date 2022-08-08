import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Routes } from 'routes/Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Reset as CSSReset } from 'styled-reset';
import GlobalStyled from 'Global.styled';
import io from 'socket.io-client';
import { useEffect } from 'react';

function App() {
  useEffect(() => { io(process.env.BASE_URL || 'http://localhost:8000'); }, []);

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CSSReset />
        <GlobalStyled />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
