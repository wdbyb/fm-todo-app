import Check from './Check';

import iconCross from '../assets/icon-cross.svg';

function Todo(props) {
  const { id, text, completed, onDeleteClick, onCheckClick } = props;

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <Check id={id} completed={completed} onChange={onCheckClick} />
      <button
        className="todo__delete"
        type="button"
        onClick={() => onDeleteClick(id)}
        aria-label="Delete todo"
      >
        <img src={iconCross} alt="" />
      </button>
      <p onClick={() => onCheckClick(id)}>{text}</p>
    </div>
  );
}

export default Todo;
