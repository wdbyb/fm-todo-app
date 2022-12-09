import { useState } from 'react';
import './styles/main.scss';
import TodosList from './components/TodosList';

function App() {
  const [mode, setMode] = useState(true);

  return (
    <div className={`app ${mode ? 'app--light' : 'app--dark'}`}>
      <div className="app__bg">
        <img
          src={`./src/assets/bg-desktop-${mode ? 'light' : 'dark'}.jpg`}
          srcSet={`./src/assets/bg-mobile-${
            mode ? 'light' : 'dark'
          }.jpg 600w, ./src/assets/bg-desktop-${
            mode ? 'light' : 'dark'
          }.jpg 1440w`}
          sizes="(max-width: 600px) 600w, 1440w"
          alt=""
        />
      </div>
      <TodosList mode={mode} onModeClick={() => setMode(!mode)} />
    </div>
  );
}

export default App;
