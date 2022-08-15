import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Routes } from 'routes/Routes';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/theme';
import { Reset as CSSReset } from 'styled-reset';
import GlobalStyled from 'Global.styled';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyled />
        <CSSReset />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
