export const FilterTypes = {
  ALL: 'all',
  COMPLETED: 'completed',
  ACTIVE: 'active',
};

export const getLocaleStorage = () => {
  let todos = localStorage.getItem('todos');

  if (todos) {
    return JSON.parse(todos);
  }

  return [];
};

export const initialTodos = [
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
