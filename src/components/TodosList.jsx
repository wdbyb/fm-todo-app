import { useState, useEffect } from 'react';
import { FilterTypes, initialTodos, getLocaleStorage } from '../base';
import Todo from './Todo';
import Settings from './Settings';
import Check from './Check';
import iconMoon from '../assets/icon-moon.svg';
import iconSun from '../assets/icon-sun.svg';

function TodosList({ mode, onModeClick }) {
  const localeTodos = getLocaleStorage();

  const [buttons, setButtons] = useState(
    localeTodos.length > 0 ? localeTodos : initialTodos
  );
  const [filteredButtons, setFilteredButtons] = useState(buttons);
  const [newTodo, setNewTodo] = useState({
    text: '',
    completed: false,
  });
  const [filterCase, setFilterCase] = useState(FilterTypes.ALL);
  const [itemsLeft, setItemsLeft] = useState(0);
  const modeIcon = mode ? iconMoon : iconSun;

  const filterBtns = (type) => {
    switch (type) {
      case FilterTypes.ALL:
        setFilteredButtons(buttons);
        break;
      case FilterTypes.ACTIVE:
        const activeBtns = buttons.filter((btn) => !btn.completed);
        setFilteredButtons(activeBtns);
        break;
      case FilterTypes.COMPLETED:
        const completedBtns = buttons.filter((btn) => btn.completed);
        setFilteredButtons(completedBtns);
        break;
      default:
        setFilteredButtons(buttons);
    }
  };

  const getActiveLength = () => {
    const activeLength = buttons.filter((btn) => !btn.completed).length;
    setItemsLeft(activeLength);
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
          onClick={onModeClick}
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
