<template>
  <div
    id="app"
    class="container"
  >
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.container {
  max-width: 960px;
  margin: 0 auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  font-size: 1.5rem;
}
</style>
