<template>
  <div class="nav-bar-border" :class="{ navBarDarkMode: isDarkModeOn }">
    <div class="main-container nav-bar">
      <div class="title">Where in the world?</div>
      <div
        class="capitalize pointer dark-mode-btn"
        :class="{ light: isDarkModeOn }"
        @click="this.setMode"
      >
        {{ getButtonTxt }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      isDarkModeOn: null
    };
  },
  computed: {
    getButtonTxt() {
      return (this.isDarkModeOn) ? 'light mode' : 'dark mode';
    }
  },
  methods: {
    setMode() {
      this.isDarkModeOn = !this.isDarkModeOn;
      this.$emit("darkModeOn", this.isDarkModeOn);
      localStorage.setItem('darkMode', this.isDarkModeOn);
    }
  },
  created() {
    this.isDarkModeOn = JSON.parse(localStorage.getItem('darkMode')) || false;
  }
}
</script>