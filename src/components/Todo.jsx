import Check from './Check';
import iconCross from '../assets/icon-cross.svg';
import { FilterTypes } from '../base';

function Todo({ id, text, completed, onDeleteClick, onCheckClick, mode }) {
  return (
    <div
      className={`todo ${mode ? 'todo--light' : 'todo--dark'} ${
        completed ? FilterTypes.COMPLETED : ''
      }`}
    >
      <Check id={id} completed={completed} onChange={onCheckClick} />
      <button
        className="todo__delete"
        type="button"
        onClick={() => onDeleteClick(id)}
        aria-label="Delete todo"
      >
        <img width="18" height="18" src={iconCross} alt="Cross icon" />
      </button>
      <p onClick={() => onCheckClick(id)}>{text}</p>
    </div>
  );
}

export default Todo;
