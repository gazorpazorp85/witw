<template>
  <div class="flex full" :class="{ darkMode: isDarkModeOn }">
    <div class="main-container">
      <h1>Oops!</h1>
      <h2>The page you're looking for is not there.</h2>
      <router-link :to="'/'">Back to home page</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkModeOn: null
    }
  },
  created() {
    this.isDarkModeOn = JSON.parse(localStorage.getItem('darkMode')) || false;
  },
  watch: {
    isDarkModeOn: () => {
      JSON.parse(localStorage.getItem('darkMode'))
    }
  }
}
</script>

<style>
</style>