import { FilterTypes } from '../base';

function Settings({ itemsLeft, filterCase, onFilterClick, onClearClick }) {
  const inputs = [FilterTypes.ALL, FilterTypes.ACTIVE, FilterTypes.COMPLETED];

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className="settings">
      <span>{itemsLeft} items left</span>
      <div className="settings__filters">
        {inputs.map((input, i) => {
          return (
            <div key={i}>
              <input
                className={input === filterCase ? FilterTypes.ACTIVE : ''}
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
