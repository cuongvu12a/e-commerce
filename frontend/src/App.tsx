import 'react-image-crop/src/ReactCrop.scss'
import 'antd/dist/antd.css';
import '@assets/styles/app.scss';


import './locales';
import Routes from './routes';
import { ThemeWrapper } from './theme';

function App() {
  return (
    <>
      <ThemeWrapper>
        <Routes />
      </ThemeWrapper>
    </>
  );
}

export default App;
