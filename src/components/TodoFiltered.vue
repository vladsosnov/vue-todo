<template>
  <div class="todo-filtered">
    <button
      :class="{ active: filter == 'all' }"
      @click="changeFilter('all')"
    >
      All
    </button>
    <button
      :class="{ active: filter == 'active' }"
      @click="changeFilter('active')"
    >
      Active
    </button>
  </div>
</template>

<script>
export default {
  name: 'TodoFiltered',
  computed: {
    filter () {
      return this.$store.state.filter
    }
  },
  methods: {
    changeFilter (filter) {
      this.$store.dispatch('updateFilter', filter)
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-filtered {
  display: flex;
  flex-direction: column;
}
</style>
