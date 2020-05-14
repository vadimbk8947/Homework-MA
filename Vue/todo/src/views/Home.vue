<template>
  <div id="app">
    <h1>Todo aplication</h1>
    <hr />

    <AddTodo @add-todo="addTodo" />
    <ModalVue />
    <Loader v-if="loading" />
    <TodoList
      v-else-if="filteredTodos.length"
      v-bind:todos="filteredTodos"
      @remove-todo="removeTodo"
    />
    <p v-else>No todos!</p>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import AddTodo from "@/components/AddTodo";
import Loader from "@/components/Loader";

export default {
  name: "App",
  data() {
    return {
      todos: [],
      loading: true,
      filter: "all",
    };
  },
  components: {
    TodoList,
    AddTodo,
    Loader,
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=3")
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          this.todos = json;
          this.loading = false;
        }, 500);
      });
  },
  computed: {
    // eslint-disable-next-line vue/return-in-computed-property
    filteredTodos() {
      if (this.filter === "all") {
        return this.todos;
      }

      if (this.filter === "completed") {
        return this.todos.filter((t) => t.computed);
      }

      if (this.filter === "not-completed") {
        return this.todos.filter((t) => !t.computed);
      }
    },
  },
  methods: {
    removeTodo(id) {
      this.todos = this.todos.filter((t) => t.id !== id);
    },
    addTodo(todo) {
      this.todos.push(todo);
    },
    modal() {
      return <ModalVue />;
    },
  },
};
</script>
