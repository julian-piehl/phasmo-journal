<template>
  <MapView />
  <MapSelector />
  <Evidences />
  <PossibleGhosts />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import MapView from "@/components/MapView.vue";
import MapSelector from "@/components/MapSelector.vue";
import Evidences from "@/components/Evidences.vue";
import PossibleGhosts from "@/components/PossibleGhosts.vue";

@Options({
  components: {
    MapView,
    MapSelector,
    Evidences,
    PossibleGhosts,
  },
})
export default class HomeView extends Vue {}
</script>
