import { Provider } from 'react-redux';
import 'react-image-crop/src/ReactCrop.scss';
import 'antd/dist/antd.css';
import '@assets/styles/app.scss';

import './locales';
import store from '@store';
import Routes from './routes';
import { ThemeWrapper } from './theme';

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeWrapper>
          <Routes />
        </ThemeWrapper>
      </Provider>
    </>
  );
}

export default App;
