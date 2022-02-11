<template>
  <div id="mapManager">
    <MapView />
    <MapSelector id="mapSelector" />
  </div>
</template>

<script>
import MapSelector from "./MapSelector.vue";
import MapView from "./MapView.vue";

export default {
  name: "MapManager",
  components: {
    MapSelector,
    MapView,
  },
};
</script>

<style scoped>
#mapManager {
  position: relative;
}

#mapSelector {
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>
