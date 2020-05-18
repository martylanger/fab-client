<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <TheGame></TheGame>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
// import TheBoard from "@/components/TheBoard.vue";
import TheGame from "@/components/TheGame.vue";
// import FabPlayer from "@/components/FabPlayer.vue";

export default {
  name: "Home",
  components: {
    TheGame
  }
};
</script>
