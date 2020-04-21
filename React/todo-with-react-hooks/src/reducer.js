export default (state = null, action) => {
  switch (action.type) {
    case "ADD":
      if (state === null) {
        return [
          {
            id: Date.now(),
            title: action.payload,
            completed: false,
          },
        ];
      }
      return [
        ...state,
        {
          id: Date.now(),
          title: action.payload,
          completed: false,
        },
      ];

    case "TOGGLE":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
    case "REMOVE":
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });
    default:
      return state;
  }
};
