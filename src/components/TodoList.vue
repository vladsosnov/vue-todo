<template>
  <div class="todo-list">
    <div>
      <div class="user-block">
        <img
          src="@/assets/images/avatar.jpg"
          alt="Vlad S"
          class="user-block__image"
        >
        <div>
          <h2 class="user-block__name">
            Vlad S.
          </h2>
          <span>
            {{ currentDate }}
          </span>
        </div>
      </div>
      <div
        v-if="isEmptyStateVisible"
        class="controll-panel"
      >
        <todo-filtered
          class="start-animation"
        />
        <todo-add-to-important
          class="start-animation"
        />
        <todo-add-to-completed
          class="start-animation"
        />
        <todo-clear-completed
          class="start-animation"
        />
      </div>
    </div>
    <div>
      <div class="create-todo">
        <input
          v-model="newTodo"
          type="text"
          class="todo-input start-animation"
          placeholder="What needs to be done?"
          @keyup.enter="addTodo"
        >
        <button
          class="todo-add-button"
          @click="addTodo"
        >
          <img
            src="@/assets/images/add-todo-icon.svg"
            alt="add-new"
          >
        </button>
      </div>
      <div v-if="isEmptyStateVisible">
        <draggable v-model="todos">
          <transition-group
            name="fade"
            enter-active-class="animated fadeInUp"
            leave-active-class="animated fadeOutDown"
          >
            <todo-item
              v-for="(todo, index) in todosFiltered"
              :key="todo.id"
              :todo="todo"
              :index="index"
              :check-all="!anyRemaining"
            />
          </transition-group>
        </draggable>
      </div>
      <div
        v-else
        class="empty-state"
      >
        <img
          src="@/assets/images/empty-state-icon.svg"
          alt="Empty state"
          class="empty-state__image"
        >
        <p class="empty-state__caption">
          Your list seems to be empty. <br>
          Let's get busy with something!
        </p>
      </div>
      <transition name="fade">
        <div
          v-if="isEmptyStateVisible"
          class="extra-container"
        >
          <todo-check-all />
          <todo-item-remaining />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem'
import TodoFiltered from './TodoFiltered'
import TodoItemRemaining from './TodoItemRemaining'
import TodoCheckAll from './TodoCheckAll'
import TodoClearCompleted from './TodoClearCompleted'
import TodoAddToImportant from './TodoAddToImportant'
import TodoAddToCompleted from './TodoAddToCompleted'
import draggable from 'vuedraggable'

export default {
  name: 'TodoList',
  components: {
    TodoItem,
    TodoFiltered,
    TodoCheckAll,
    TodoClearCompleted,
    TodoAddToImportant,
    TodoAddToCompleted,
    TodoItemRemaining,
    draggable
  },
  data () {
    return {
      newTodo: '',
      idForTodo: 3
    }
  },
  computed: {
    anyRemaining () {
      return this.$store.getters.anyRemaining
    },
    todosFiltered () {
      return this.$store.getters.todosFiltered
    },
    isEmptyStateVisible () {
      return this.$store.state.todos.length
    },
    currentDate () {
      return new Date().toLocaleString().slice(0, 10)
    },
    todos: {
      get () {
        return this.$store.getters.todos(this.id)
      },
      set (value) {
        this.$store.commit('updateList', {
          value,
          id: this.id
        })
      }
    }
  },
  methods: {
    addTodo () {
      if (this.newTodo.trim().length === 0) {
        alert('This field can not be empty!')

        return
      }

      this.$store.dispatch('addTodo', {
        id: this.idForTodo,
        title: this.newTodo
      })

      this.newTodo = ''
      this.idForTodo++
    }
  }
}
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css");

.todo-list {
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-gap: 1rem;
  padding: .5rem;
  border: 1px solid;
  border-radius: .25rem;

  .user-block {
    display: flex;
    margin-bottom: 2rem;

    &__image {
      max-width: 7.5rem;
      border-radius: 6.25rem;
      margin-right: 1rem;
    }

    &__name {
      margin-top: 0;
      margin-bottom: .625rem;
    }
  }

  .create-todo {
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

    .todo-input {
      width: 100%;
      padding: .625rem 1.1rem;
      font-size: 1.1rem;
      border-radius: 1.25rem;

      &:focus {
        outline: 0;
      }
    }

    .todo-add-button {
      background: none;
      border: none;
      padding: 0;
      margin: 0;
    }

    & img {
      position: absolute;
      top: .5rem;
      right: .625rem;
      max-width: 1.875rem;
      transition: transform .2s ease;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .todo-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .75rem;
    padding-left: .5rem;
    padding-right: .5rem;
    animation-duration: .3s;
    border: 1px solid;
  }

  .remove-item {
    margin-left: .875rem;
    cursor: pointer;

    &:hover {
      color: #000;
    }
  }

  .todo-item-left {
    display: flex;
    align-items: center;
  }

  .todo-item-label {
    padding: .625rem;
    border: 1px solid #fff;
  }

  .todo-item-edit {
    width: 100%;
    margin-left: .75rem;
    padding: .625rem;
    font-size: 1.5rem;
    color: #2c3e50;
    border: 1px solid #ccc;

    &:focus {
      outline: none;
    }
  }

  .empty-state {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    text-align: center;
    box-shadow: 0 .125rem .25rem rgba(0, 0, 0, .25);
    animation: magnification .6s ease;

    @keyframes magnification {
      0% {
        transform: scale(.5, .5);
      }
    }

    &__image {
      max-width: 9.5rem;
    }
  }

  .start-animation {
    animation: magnification .6s ease;

    @keyframes magnification {
      0% {
        transform: scale(.5, .5);
      }
    }
  }

  .completed {
    text-decoration: line-through;
    color: grey;
  }

  .completed-checkbox {
    &::before {
      content: url('~@/assets/images/successful-added-icon.svg');
      position: relative;
      top: -.125rem;
    }
  }

  .controll-panel {
    button {
      width: 100%;
      padding: .5rem;
      font-size: 1rem;
      background-color: #fff;
      cursor: pointer;
      border-radius: .625rem;
      transition: background .4s ease;
      margin-bottom: .5rem;

      &:hover {
        background: lightgreen;
      }

      &:focus {
        outline: none;
      }
    }

    .active {
      background: lightgreen;
    }
  }

  .extra-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: .875rem;
    padding-top: .875rem;
    font-size: 1.1rem;
    border-top: 1px solid lightgray;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: .2s;
  }

  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
}
</style>
