import { useState, useEffect } from 'react';
import './styles/main.scss';
import Todo from './components/Todo';
import Settings from './components/Settings';

function App() {
  const initialBtns = [
    {
      id: 1,
      text: 'Job around the park 3x',
      completed: false,
    },
    {
      id: 2,
      text: 'Created a todo',
      completed: true,
    },
  ];
  const [buttons, setButtons] = useState(initialBtns);
  const [filteredButtons, setFilteredButtons] = useState(initialBtns);
  const [text, setText] = useState('');
  const [filterCase, setFilterCase] = useState('all');
  const [itemsLeft, setItemsLeft] = useState(0);

  const filterBtns = (type) => {
    switch (type) {
      case 'all':
        setFilteredButtons(buttons);
        break;
      case 'active':
        const activeBtns = buttons.filter((btn) => !btn.completed);
        setFilteredButtons(activeBtns);
        break;
      case 'completed':
        const completedBtns = buttons.filter((btn) => btn.completed);
        setFilteredButtons(completedBtns);
        break;
      default:
        setFilteredButtons(buttons);
    }
  };

  const getActiveLength = () => {
    const active = buttons.filter((btn) => !btn.completed);
    setItemsLeft(active.length);
  };

  const handleInputEnter = (e) => {
    if (e.key === 'Enter') {
      setButtons((prev) => [
        ...prev,
        {
          id: text + Math.random,
          text,
          completed: false,
        },
      ]);
      setText('');
    }
  };

  const handleClearCompletedClick = () => {
    setButtons(buttons.filter((btn) => !btn.completed));
  };

  const handleCheckClick = (id) => {
    const newArr = buttons.map((btn) => {
      if (btn.id === id) {
        return { ...btn, completed: !btn.completed };
      }
      return btn;
    });

    setButtons(newArr);
  };

  const handleDeleteClick = (id) => {
    const filtered = buttons.filter((btn) => btn.id !== id);
    setButtons(filtered);
  };

  const handleFilterClick = (e) => {
    const { name } = e.target;

    setFilterCase(name);
  };

  useEffect(() => {
    getActiveLength();
  }, [buttons]);

  useEffect(() => {
    filterBtns(filterCase);
  }, [filterCase, buttons]);

  return (
    <div className="app">
      <div className="todos-list">
        <div className="todos-list__input">
          <label>
            <input
              type="text"
              name="create"
              id="create"
              placeholder="Create a new todos-list"
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleInputEnter}
              value={text}
            />
          </label>
        </div>

        <div className="todos-list__list-wrapper">
          <div className="todos-list__list">
            {filteredButtons.map((btn, index) => (
              <Todo
                {...btn}
                onDeleteClick={handleDeleteClick}
                onCheckClick={handleCheckClick}
                key={index}
              />
            ))}
          </div>
          <Settings
            itemsLeft={itemsLeft}
            filterCase={filterCase}
            onClearClick={handleClearCompletedClick}
            onFilterClick={handleFilterClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
