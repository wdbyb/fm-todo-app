import { useState } from 'react';
import './styles/main.scss';
import TodosList from './components/TodosList';

function App() {
  const [mode, setMode] = useState(true);

  let mobileImage = new URL(
    `./bg-mobile-${mode ? 'light' : 'dark'}.jpg`,
    import.meta.url
  ).href;
  let mobileImageRetina = new URL(
    `./bg-mobile-${mode ? 'light' : 'dark'}@2x.jpg`,
    import.meta.url
  ).href;
  let desktopImage = new URL(
    `./bg-desktop-${mode ? 'light' : 'dark'}.jpg`,
    import.meta.url
  ).href;

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
