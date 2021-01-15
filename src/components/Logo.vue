<template>
  <div id="container">
    <img src="assets/logo.png">
  </div>
</template>

<script lang="ts">

export default {
  name: 'ExploreContainer',
  props: {
    name: String
  }
}
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

img {

  transform: scale(0.6);
}
</style>