<template>
  <div class="todo-check-all">
    <div class="todo-check-all__form-group form-group">
      <input
        id="check-all"
        type="checkbox"
        :checked="!anyRemaining"
        class="form-group__input"
        @change="allChecked"
      >
      <label
        for="check-all"
        class="form-group__label"
      >
        Check All
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoCheckAll',
  computed: {
    anyRemaining () {
      return this.$store.getters.anyRemaining
    }
  },
  methods: {
    allChecked () {
      this.$store.dispatch('checkAll', event.target.checked)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-check-all {
  .form-group {
    &__input {
      display: none;

      &:checked {
        & + .form-group__label {
          &::after {
            content: url('~@/assets/images/successful-added-icon.svg');
            position: absolute;
            left: -.25rem;
            width: 1.5rem;
          }
        }
      }
    }

    &__label {
      position: relative;
      display: flex;
      align-items: center;
      cursor: pointer;

      &::before {
        content: '';
        position: relative;
        top: -.06rem;
        display: inline-block;
        margin-right: .625rem;
        padding: 6px;
        border: 1px solid #9c8f8f;
        border-radius: .25rem;
        background-color: transparent;
        cursor: pointer;
      }
    }
  }
}
</style>
