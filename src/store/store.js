import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    filter: 'all',
    todos: [
      {
        id: 1,
        title: 'First todo',
        completed: false,
        important: false,
        editing: false
      },
      {
        id: 2,
        title: 'Second todo',
        complete: false,
        important: false,
        editing: false
      }
    ]
  },
  getters: {
    remaining (state) {
      return state.todos.filter(todo => !todo.completed).length
    },
    anyRemaining (getters) {
      return getters.remaining !== 0
    },
    todosFiltered (state) {
      if (state.filter === 'all') {
        return state.todos
      } else if (state.filter === 'active') {
        return state.todos.filter(todo => !todo.completed)
      } else if (state.filter === 'completed') {
        return state.todos.filter(todo => todo.completed)
      } else if (state.filter === 'important') {
        return state.todos.filter(todo => todo.important)
      }

      return state.todos
    },
    showCompletedButton (state) {
      return state.todos.filter(todo => todo.completed).length > 0
    },
    showClearCompletedButton (state) {
      return state.todos.filter(todo => todo.completed).length > 0
    },
    todos: state => {
      return id => {
        return !id ? state.todos : ''
      }
    },
    showImportantdButton (state) {
      return state.todos.filter(todo => todo.important).length > 0
    }
  },
  mutations: {
    addTodo (state, todo) {
      state.todos.push({
        id: todo.id,
        title: todo.title,
        completed: false,
        important: false,
        editing: false
      })
    },
    updateTodo (state, todo) {
      const index = state.todos.findIndex(item => item.id === todo.id)

      state.todos.splice(index, 1, {
        id: todo.id,
        title: todo.title,
        completed: todo.completed,
        important: todo.important,
        editing: todo.editing
      })
    },
    deleteTodo (state, id) {
      const index = state.todos.findIndex(item => item.id === id)
      state.todos.splice(index, 1)
    },
    checkAll (state, checked) {
      state.todos.forEach(todo => (todo.completed = checked))
    },
    updateFilter (state, filter) {
      state.filter = filter
    },
    updateList (state, { value, id }) {
      return !id ? (state.todos = value) : ''
    },
    clearCompleted (state) {
      state.todos = state.todos.filter(todo => !todo.completed)
    }
  },
  actions: {
    addTodo (context, todo) {
      setTimeout(() => {
        context.commit('addTodo', todo)
      }, 100)
    },
    updateTodo (context, todo) {
      setTimeout(() => {
        context.commit('updateTodo', todo)
      }, 100)
    },
    deleteTodo (context, id) {
      context.commit('deleteTodo', id)
    },
    checkAll (context, checked) {
      setTimeout(() => {
        context.commit('checkAll', checked)
      }, 100)
    },
    updateFilter (context, filter) {
      setTimeout(() => {
        context.commit('updateFilter', filter)
      }, 100)
    },
    clearCompleted (context) {
      setTimeout(() => {
        context.commit('clearCompleted')
      }, 100)
    }
  }
})
