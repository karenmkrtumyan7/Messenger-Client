import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Routes } from 'routes/Routes';
// import { Reset as CSSReset } from 'styled-reset';
// import GlobalStyled from 'Global.styled';

function App() {
  return (
    <Provider store={store}>
      {/* <CSSReset /> */}
      {/* <GlobalStyled /> */}
      <Routes />
    </Provider>
  );
}

export default App;
