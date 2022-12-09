import Check from './Check';

function Todo(props) {
  const { id, text, completed, onDeleteClick, onCheckClick } = props;

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <Check id={id} completed={completed} onChange={onCheckClick} />
      <button
        className="todo__delete"
        type="button"
        onClick={() => onDeleteClick(id)}
      ></button>
      <p onClick={() => onCheckClick(id)}>{text}</p>
    </div>
  );
}

export default Todo;
