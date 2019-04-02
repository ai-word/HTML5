<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
  }
}
</script>

<style scoped>
.app-main {
  margin-top:40px;
  min-height: calc(100vh - 138px);
  position: relative;
  overflow: hidden;
  background: #fdfdfd;
}
</style>
