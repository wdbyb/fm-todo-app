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
          alt=""
        />
      </div>
      <TodosList mode={mode} onModeClick={() => setMode(!mode)} />
    </div>
  );
}

export default App;
