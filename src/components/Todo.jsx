function Todo(props) {
  const { id, text, completed, onDeleteClick, onCheckClick } = props;

  return (
    <div className={`todo ${completed ? 'completed' : ''}`}>
      <input
        className="todo__checkbox"
        type="checkbox"
        name={`todo-${id}`}
        id={`todo-${id}`}
        checked={completed}
        onChange={() => onCheckClick(id)}
      />
      <label className="todo__check" htmlFor={`todo-${id}`}></label>
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
