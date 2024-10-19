<template>
  <v-app>
    <v-main class="bg-background">
      <div class="cursor"></div>
      <HomeScreen/>
    </v-main>

  </v-app>
</template>

<style>
  * {
    transition: background-color 0.8s ease, color 0.1s ease, background-image 0.8s ease;
    cursor: none;
  }
  html {
    scroll-behavior: smooth;
  }
  .cursor{
    z-index: 99999;
    position: fixed;
    background: rgb(var(--v-theme-pointer));
    width: 20px;
    height: 20px;
    border-radius: 50%;
    pointer-events: none;
    box-shadow: 0 0 20px rgb(var(--v-theme-pointer)),
                0 0 60px rgb(var(--v-theme-pointer)),
                0 0 100px rgb(var(--v-theme-pointer));
    transform: translate(-50%, -50%);
    display: none;
    opacity: 0.5;
  }
  .cursor:before{
    content: '';
    position: absolute;
    background: rgb(var(--v-theme-pointer));
    width: 100px;
    height: 100px;
    opacity: 0.1;
    transform: translate(-40%, -40%);
    border-radius: 50%;
  }
  b {
        color: rgb(255, 136, 0);
        transition: background-color color 0.2s ease;
    }
</style>


<script setup>
  import { onMounted } from 'vue';
  import HomeScreen from './components/screens/HomeScreen.vue';

  onMounted(() => {
    const cursor = document.querySelector(".cursor");
    var timeout;

    document.addEventListener("mousemove", (e) => {
      let x = e.clientX;
      let y = e.clientY;

      cursor.style.top = y + "px";
      cursor.style.left = x + "px";

      cursor.style.display = "block";

      function mouseStopped(){
        cursor.style.display = "none";
      }
      clearTimeout(timeout);
      timeout = setTimeout(mouseStopped, 1000);
    });

    document.addEventListener("mouseout", () => {
      cursor.style.display = "none";
    });
  });

</script>

