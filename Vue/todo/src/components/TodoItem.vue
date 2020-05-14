<template>
  <li>
    <span v-bind:class="{ done: todo.completed }">
      <input type="checkbox" v-on:change="todo.completed = !todo.completed" />
      <strong>{{ index + 1 }}</strong>
      {{ todo.title | upperCase }}
    </span>
    <button class="rm" v-on:click="$emit('remove-todo', todo.id)">
      &times;
    </button>
  </li>
</template>

<script>
export default {
  props: {
    todo: {
      type: Object,
      required: true,
    },
    index: Number,
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },
  },
};
</script>

<style scoped>
li {
  width: 800px;
  margin: 0 auto;
  border: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 2rem;
  margin-bottom: 1rem;
}

.rm {
  background: red;
  color: #fff;
  border: none;
  border-radius: 50%;
  font-weight: bold;
  cursor: pointer;
  outline: none;
}

input {
  margin-right: 1rem;
}

.done {
  text-decoration: line-through;
}
</style>
