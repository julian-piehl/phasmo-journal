<template>
  <Evidences />
  <PossibleGhosts />
</template>

<script>
import Evidences from "./Evidences.vue";
import PossibleGhosts from "./PossibleGhosts.vue";

export default {
  name: "EvidenceSelector",
  components: {
    Evidences,
    PossibleGhosts,
  },
};
</script>

<style scoped></style>
