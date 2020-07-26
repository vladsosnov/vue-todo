<template>
  <div class="todo-item">
    <div class="todo-item-left">
      <input
        v-model="completed"
        type="checkbox"
        class="todo-item-left__checkbox"
        :class="{ 'completed-checkbox': completed }"
        @change="doneEdit"
      >
      <div
        v-if="!editing"
        class="todo-item-label"
        :class="{ 'completed': completed }"
        @dblclick="editTodo"
      >
        {{ title }}
      </div>
      <input
        v-else
        v-model="title"
        v-focus
        type="text"
        class="todo-item-edit"
        @blur="doneEdit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
      >
    </div>
    <div class="controll">
      <input
        :id="id"
        v-model="important"
        type="checkbox"
        class="add-to-imp__input"
        @change="doneEdit"
      >
      <label
        :for="id"
        class="add-to-imp__label"
      />
      <button
        class="remove-button"
        @click="removeTodo(todo.id)"
      >
        <img
          src="@/assets/images/delete-todo-icon.svg"
          alt="Delete"
          class="remove-button__img"
        >
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoItem',
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      }
    }
  },
  props: {
    todo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    checkAll: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      id: this.todo.id,
      title: this.todo.title,
      completed: this.todo.completed,
      important: this.todo.important,
      editing: this.todo.editing,
      beforeEditCache: ''
    }
  },
  watch: {
    checkAll () {
      this.completed = this.checkAll ? true : this.todo.completed
    }
  },
  methods: {
    removeTodo (id) {
      this.$store.dispatch('deleteTodo', id)
    },
    editTodo () {
      this.beforeEditCache = this.title
      this.editing = true
    },
    doneEdit () {
      if (this.title.trim() === '') {
        this.title = this.beforeEditCache
      }

      this.editing = false

      this.$store.dispatch('updateTodo', {
        id: this.id,
        title: this.title,
        completed: this.completed,
        important: this.important,
        editing: this.editing
      })
    },
    cancelEdit () {
      this.title = this.beforeEditCache
      this.editing = false
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-item-left {
  &__checkbox {
    min-width: 1.25rem;
    cursor: pointer;
  }
}

.controll {
  display: flex;

  .add-to-imp {
    &__input {
      display: none;

      &:checked {
        & + .add-to-imp__label {
          &::after {
            content: url('~@/assets/images/added-important-todo-icon.svg');
            position: absolute;
            width: 1.875rem;
          }
        }
      }
    }

    &__label {
      position: relative;
      top: .125rem;
      display: flex;
      align-items: center;
      cursor: pointer;
      transition: transform .2s ease;

      &::before {
        content: url('~@/assets/images/important-todo-icon.svg');
        width: 1.875rem;
        margin-right: .3rem;
        cursor: pointer;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .remove-button {
    background: none;
    outline: none;
    border: none;
    cursor: pointer;
    animation: magnification .6s ease;

    @keyframes magnification {
      0% {
        transform: scale(.5, .5);
      }
    }

    &__img {
      width: 30px;
      transition: transform .2s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
