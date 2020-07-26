<template>
  <button
    v-if="showImportantdButton"
    @click="changeFilter('important')"
  >
    Important
  </button>
</template>

<script>
export default {
  name: 'TodoAddToImportant',
  computed: {
    showImportantdButton () {
      return this.$store.getters.showImportantdButton
    }
  },
  methods: {
    changeFilter (filter) {
      this.$store.dispatch('updateFilter', filter)
    }
  }
}
</script>
