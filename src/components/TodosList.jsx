import { useState, useEffect } from 'react';
import Todo from './Todo';
import Settings from './Settings';
import Check from './Check';
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';

const getLocaleStorage = () => {
  let todos = localStorage.getItem('todos');

  if (todos) {
    return JSON.parse(todos);
  }

  return [];
};

const initialTodos = [
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

function TodosList(props) {
  const { mode } = props;
  const localeTodos = getLocaleStorage();

  const [buttons, setButtons] = useState(
    localeTodos.length > 0 ? localeTodos : initialTodos
  );
  const [filteredButtons, setFilteredButtons] = useState(buttons);
  const [newTodo, setNewTodo] = useState({
    text: '',
    completed: false,
  });
  const [filterCase, setFilterCase] = useState('all');
  const [itemsLeft, setItemsLeft] = useState(0);
  const modeIcon = mode ? iconMoon : iconSun;

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
    if (e.key === 'Enter' && newTodo.text.length > 0) {
      setButtons((prev) => [
        ...prev,
        {
          id: newTodo.text + Math.random,
          text: newTodo.text,
          completed: newTodo.completed,
        },
      ]);
      setNewTodo({
        text: '',
        completed: false,
      });
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
    localStorage.setItem('todos', JSON.stringify(buttons));
  }, [buttons]);

  useEffect(() => {
    filterBtns(filterCase);
  }, [filterCase, buttons]);

  const handleMainCheckClick = () => {
    setNewTodo((prev) => ({ ...newTodo, completed: !prev.completed }));
  };

  return (
    <div
      className={`todos-list ${
        mode ? 'todos-list--light' : 'todos-list--dark'
      }`}
    >
      <div className="todos-list__header">
        <h1>TODO</h1>
        <button
          className="todos-list__mode"
          onClick={props.onModeClick}
          type="button"
          aria-label="Dark/light mode toggler"
        >
          <img width="26" height="26" src={modeIcon} alt="Mode icon" />
        </button>
      </div>
      <div className="todos-list__input">
        <Check
          id={'create-checked'}
          completed={newTodo.completed}
          onChange={handleMainCheckClick}
        />
        <label>
          <input
            type="text"
            name="create"
            id="create"
            placeholder="Create a new todos-list"
            onChange={(e) =>
              setNewTodo(() => ({ ...newTodo, text: e.target.value }))
            }
            onKeyDown={handleInputEnter}
            value={newTodo.text}
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
              mode={mode}
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
  );
}

export default TodosList;
