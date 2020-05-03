import { VisibilityFilters } from "../actions/actions";

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return todos;

    case VisibilityFilters.SHOW_ACTIVE:
      return todos.filter((task) => !task.completed);

    case VisibilityFilters.SHOW_COMPLETED:
      return todos.filter((task) => task.completed);

    default:
      throw new Error("Unknown filter: " + filter);
  }
};

export default getVisibleTodos;
