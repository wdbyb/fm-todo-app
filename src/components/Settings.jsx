function Settings(props) {
  const { itemsLeft, filterCase, onFilterClick, onClearClick } = props;
  const inputs = ['all', 'active', 'completed'];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="settings">
      <span>{itemsLeft} items left</span>
      <div className="settings__filters">
        {inputs.map((input) => {
          return (
            <div>
              <input
                className={input === filterCase ? 'active' : ''}
                onClick={onFilterClick}
                type="button"
                name={input}
                value={capitalizeFirstLetter(input)}
              />
            </div>
          );
        })}
      </div>
      <button
        className="settings__clear-completed"
        type="button"
        onClick={onClearClick}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default Settings;
