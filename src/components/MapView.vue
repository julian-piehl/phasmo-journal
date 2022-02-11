<template>
  <div id="wrapper" :style="{ height: pixelSize }">
    <img :src="map" draggable="false" />
  </div>
</template>

<script>
export default {
  name: "MapView",
  data() {
    return {
      size: window.innerHeight - 120,
    };
  },
  computed: {
    map() {
      const map = this.$store.state.selectedMap;

      if (!map || map.length === 0) return "";

      return require("@/assets/maps/" + map.replaceAll(" ", "_") + ".png");
    },
    pixelSize() {
      if (this.map == 0) return "0";
      return this.size + "px";
    },
  },
};
</script>

<style scoped>
#wrapper {
  display: flex;
  align-content: center;
  background: #000;
}
img {
  margin: auto;
  height: 100%;
}
</style>
