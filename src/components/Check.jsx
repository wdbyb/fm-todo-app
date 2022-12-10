import iconCheck from '../assets/icon-check.svg';

function Check(props) {
  const { id, completed, onChange } = props;

  return (
    <div className="check">
      <input
        className="check__input"
        type="checkbox"
        name={`todo-${id}`}
        id={`todo-${id}`}
        checked={completed}
        onChange={() => onChange(id)}
      />
      <label className="check__label" htmlFor={`todo-${id}`}>
        <img width="11" height="9" src={iconCheck} alt="" />
      </label>
    </div>
  );
}

export default Check;
