<template>
  <select name="" id="" v-model="selectedMap">
    <option v-for="map in maps" :key="map" :value="map">{{ map }}</option>
  </select>
</template>

<script lang="ts">
import { Vue } from "vue-class-component";

export default class MapSelector extends Vue {
  get maps(): string[] {
    return this.$store.state.maps;
  }

  get selectedMap(): string {
    return this.$store.state.selectedMap;
  }
  set selectedMap(value: string) {
    this.$store.commit("UPDATE_SELECTED_MAP", value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
select {
  position: absolute;
  right: 20px;
  top: 10px;
}
</style>
