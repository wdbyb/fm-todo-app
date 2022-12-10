import { useState } from 'react';
import './styles/main.scss';
import TodosList from './components/TodosList';
import mobileImageLight from './assets/bg-mobile-light.jpg';
import mobileImageLightRetina from './assets/bg-mobile-light@2x.jpg';
import desktopImageLight from './assets/bg-desktop-light.jpg';
import mobileImageDark from './assets/bg-mobile-dark.jpg';
import mobileImageDarkRetina from './assets/bg-mobile-dark@2x.jpg';
import desktopImageDark from './assets/bg-desktop-dark.jpg';

function App() {
  const [mode, setMode] = useState(true);
  let mobileImage = mode ? mobileImageLight : mobileImageDark;
  let mobileImageRetina = mode ? mobileImageLightRetina : mobileImageDarkRetina;
  let desktopImage = mode ? desktopImageLight : desktopImageDark;

  return (
    <div className={`app ${mode ? 'app--light' : 'app--dark'}`}>
      <div className="app__bg">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={`${mobileImage} 375w, ${mobileImageRetina} 750w`}
            sizes="768px"
          />
          <source srcSet={`${desktopImage} 1440w`} sizes="1440px" />
          <img
            width="1440"
            height="300"
            src={desktopImage}
            alt="Background image with mountains"
          />
        </picture>
      </div>
      <TodosList mode={mode} onModeClick={() => setMode(!mode)} />
    </div>
  );
}

export default App;
