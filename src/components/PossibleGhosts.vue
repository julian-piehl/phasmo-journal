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
  display: grid;
  flex-wrap: wrap;
  grid-template-columns: repeat(4, 1fr);

  margin: 10px;

  @media screen and(max-width: 1500px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and(max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and(max-width: 750px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
