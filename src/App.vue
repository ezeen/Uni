<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
//import LandingPage from './components/LandingPage.vue';
</script>

<template>
  <v-app>
    <Navbar/>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<style scoped>

</style>