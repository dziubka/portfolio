<template>
  <h1>Site Header</h1>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {
  name: 'SiteHeader'
}
</script>

<style lang="scss">
@import "../assets/styles/components/site-header";
</style>
