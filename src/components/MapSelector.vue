<template>
  <select name="" id="" v-model="selectedMap">
    <option v-for="map in maps" :key="map" :value="map">{{ map }}</option>
  </select>
</template>

<script>
export default {
  name: "MapSelector",
  data() {
    return {
      maps: this.$store.state.maps,
    };
  },
  computed: {
    selectedMap: {
      get() {
        return this.$store.state.selectedMap;
      },
      set(value) {
        this.$store.commit("UPDATE_SELECTED_MAP", value);
      },
    },
  },
};
</script>

<style scoped></style>
