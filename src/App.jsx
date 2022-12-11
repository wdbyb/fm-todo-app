import { useState } from 'react';
import './styles/main.scss';
import TodosList from './components/TodosList';
import mobileImageLight from './assets/bg-mobile-light.jpg';
import mobileImageLightRetina from './assets/bg-mobile-light@2x.jpg';
import desktopImageLight from './assets/bg-desktop-light.jpg';
import mobileImageDark from './assets/bg-mobile-dark.jpg';
import mobileImageDarkRetina from './assets/bg-mobile-dark@2x.jpg';
import desktopImageDark from './assets/bg-desktop-dark.jpg';
import mobileImageLightWebp from './assets/bg-mobile-light.webp';
import mobileImageLightRetinaWebp from './assets/bg-mobile-light@2x.webp';
import desktopImageLightWebp from './assets/bg-desktop-light.webp';
import mobileImageDarkWebp from './assets/bg-mobile-dark.webp';
import mobileImageDarkRetinaWebp from './assets/bg-mobile-dark@2x.webp';
import desktopImageDarkWebp from './assets/bg-desktop-dark.webp';

function App() {
  const [mode, setMode] = useState(true);
  let mobileImage = mode ? mobileImageLight : mobileImageDark;
  let mobileImageRetina = mode ? mobileImageLightRetina : mobileImageDarkRetina;
  let desktopImage = mode ? desktopImageLight : desktopImageDark;
  let mobileImageWebp = mode ? mobileImageLightWebp : mobileImageDarkWebp;
  let mobileImageRetinaWebp = mode
    ? mobileImageLightRetinaWebp
    : mobileImageDarkRetinaWebp;
  let desktopImageWebp = mode ? desktopImageLightWebp : desktopImageDarkWebp;

  return (
    <div className={`app ${mode ? 'app--light' : 'app--dark'}`}>
      <div className="app__bg">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={`${mobileImageWebp} 375w, ${mobileImageRetinaWebp} 750w`}
            type="image/webp"
            sizes="768px"
          />
          <source
            media="(max-width: 768px)"
            srcSet={`${mobileImage} 375w, ${mobileImageRetina} 750w`}
            type="image/jpeg"
            sizes="768px"
          />
          <source
            srcSet={`${desktopImageWebp} 1440w`}
            sizes="1440px"
            type="image/webp"
          />
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
