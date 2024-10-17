<template>
  <v-app>
    <v-main class="bg-background">
      <HomeScreen/>
    </v-main>

  </v-app>
</template>

<style>
  * {
    transition: background-color 0.8s ease, color 0.1s ease, background-image 0.8s ease;
  }
  html {
    scroll-behavior: smooth;
  }
</style>


<script setup>
  import HomeScreen from './components/screens/HomeScreen.vue';

</script>

