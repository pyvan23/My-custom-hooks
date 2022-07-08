export const todoReducer = (initialState, action) => {
  switch (action.type) {
    case "[TODO] add Todo":
      return [...initialState, action.payload];
    case "[TODO] remove Todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] toggle Todo":
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, done: !todo.done };
        }

        return todo;
      });
    default:
      return initialState;
  }
};
