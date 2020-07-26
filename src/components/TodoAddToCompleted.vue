<template>
  <button
    v-if="showCompletedButton"
    @click="changeFilter('completed')"
  >
    Completed
  </button>
</template>

<script>
export default {
  name: 'TodoAddToCompletd',
  computed: {
    showCompletedButton () {
      return this.$store.getters.showCompletedButton
    }
  },
  methods: {
    changeFilter (filter) {
      this.$store.dispatch('updateFilter', filter)
    }
  }
}
</script>
