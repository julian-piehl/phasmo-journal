<template>
  <div id="ghosts">
    <GhostCard v-for="ghost in ghosts" :key="ghost.type" :ghost="ghost" />
  </div>
</template>

<script lang="ts">
import { Vue, Options } from "vue-class-component";
import GhostCard from "./GhostCard.vue";

import Ghost from "@/interfaces/Ghost";
import Evidence from "@/interfaces/Evidence";

@Options({
  components: {
    GhostCard,
  },
})
export default class PossibleGhosts extends Vue {
  get ghosts(): Ghost[] {
    return this.$store.getters.possibleGhosts;
  }

  isMustEvidence(evidence: string): boolean {
    const evidences: Evidence[] = this.$store.getters.evidences;

    const evidenceFound = evidences.find((x) => x.type == evidence);

    if (!evidenceFound) return false;
    return evidenceFound.state == true;
  }
}
</script>

<style scoped lang="scss">
#ghosts {
  display: flex;
  flex-wrap: wrap;

  margin: 10px;
}
</style>
