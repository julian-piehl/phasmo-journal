<template>
  <MapManager />
  <EvidenceSelector />
</template>

<script>
import EvidenceSelector from "./components/EvidenceSelector.vue";
import MapManager from "./components/MapManager.vue";

export default {
  name: "App",
  components: {
    EvidenceSelector,
    MapManager,
  },
};
</script>

<style>
#app {
  position: absolute;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;

  width: 100%;
}
</style>
