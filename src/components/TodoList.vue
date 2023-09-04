<template>
  <div>
    <h1>Todo List</h1>
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new Todo">
    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        <input type="checkbox" v-model="todo.completed">
        {{ todo.text }}
        <button @click="removeTodo(index)">Delete</button>
      </li>
    </ul>
    <!-- 配置路由链接 -->
    <router-link to="/HelloWorld">Home</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newTodo: '',
      todos: []
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.trim() === '') return
      this.todos.push({ text: this.newTodo, completed: false })
      this.newTodo = ''
    },
    removeTodo (index) {
      this.todos.splice(index, 1)
    }
  }
}
</script>
