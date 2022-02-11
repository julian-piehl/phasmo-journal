<template>
  <div id="ghosts">
    <GhostCard v-for="ghost in ghosts" :key="ghost.type" :ghost="ghost" />
  </div>
</template>

<script>
import GhostCard from "./GhostCard.vue";

export default {
  name: "PossibleGhosts",
  components: {
    GhostCard,
  },
  data() {
    return {};
  },
  computed: {
    ghosts: function () {
      return this.$store.getters.possibleGhosts;
    },
  },
  methods: {
    isMustEvidence(evidence) {
      const evidences = this.$store.getters.evidences;

      const evidenceFound = evidences.find((x) => x.type == evidence);

      return evidenceFound.state == true;
    },
  },
};
</script>

<style scoped>
#ghosts {
  display: flex;
  flex-wrap: wrap;

  margin: 10px;
}
</style>
