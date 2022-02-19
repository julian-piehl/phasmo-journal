<template>
  <div id="image" v-if="map != ''" :style="{ backgroundImage: map }"></div>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MapView extends Vue {
  get map(): string {
    const map: string = this.$store.state.selectedMap;

    if (!map || map.length === 0) return "";

    return (
      "url(" +
      require("@/assets/maps/" + map.replaceAll(" ", "_") + ".png") +
      ")"
    );
  }
}
</script>

<style scoped lang="scss">
#image {
  background: #000;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  max-height: calc(100% - 120px);
  height: 100%;
}
</style>
