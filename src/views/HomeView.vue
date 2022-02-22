<template>
  <MapView />
  <MapSelector />
  <Evidences />
  <Characteristics />
  <PossibleGhosts />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MapView from "@/components/MapView.vue";
import MapSelector from "@/components/MapSelector.vue";
import Evidences from "@/components/Evidences.vue";
import PossibleGhosts from "@/components/PossibleGhosts.vue";
import Characteristics from "@/components/Characteristics.vue";

@Options({
  components: {
    MapView,
    MapSelector,
    Evidences,
    PossibleGhosts,
    Characteristics,
  },
})
export default class HomeView extends Vue {}
</script>
