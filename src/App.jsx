import { useState } from 'react';
import './styles/main.scss';

function App() {
  return (
    <div className="app">
      <div className="todo">
        <div className="todo__input">
          <label>
            <input
              type="text"
              name="create"
              id="create"
              placeholder="Create a new todo"
            />
          </label>
        </div>

        <div className="todo__list">
          <div className="todo__item">
            <input
              className="todo__checkbox"
              type="checkbox"
              name="todo-1"
              id="todo-1"
            />
            <label className="todo__check" htmlFor="todo-1"></label>
            <button
              className="todo__delete"
              type="button"
              onClick={() => console.log('Button clicked')}
            ></button>
            <span>Job around the park 3x</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
