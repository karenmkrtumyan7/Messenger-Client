import 'antd/dist/antd.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './utils/store';
import { Routes } from './routes/Routes';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes />
      </Provider>
    </BrowserRouter>
  );
}

export default App;
