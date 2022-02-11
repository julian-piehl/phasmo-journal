<template>
  <div class="ghost" :class="{ disabled: !ghost.manualPossible }">
    <h1 class="button" @click="togglePossible">{{ ghost.type }}</h1>
    <div>
      <h2>Evidences:</h2>
      <ul class="evidences">
        <li
          v-for="evidence in ghost.evidences"
          :key="evidence"
          :class="{ must: isMustEvidence(evidence) }"
        >
          {{ evidence }}
        </li>
      </ul>
    </div>
    <div>
      <h2>Strength:</h2>
      <p>{{ ghost.strength }}</p>

      <h2>Weakness:</h2>
      <p>{{ ghost.weakness }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "GhostCard",
  props: ["ghost"],
  data() {
    return {};
  },
  methods: {
    isMustEvidence(evidence) {
      const evidences = this.$store.getters.evidences;

      const evidenceFound = evidences.find((x) => x.type == evidence);

      return evidenceFound.state == true;
    },
    togglePossible() {
      this.$store.commit("TOGGLE_GHOST_MANUAL_POSSIBLE", this.ghost);
    },
  },
};
</script>

<style scoped>
.ghost {
  border: 1px solid #45474e;

  min-width: 300px;

  flex: 1 1 20%;
  padding: 20px;
  padding-top: 10px;
  margin: 10px;

  transition: 0.2s;
}
.ghost.disabled {
  opacity: 0.25;
  user-select: none;
}

.ghost h1 {
  cursor: pointer;

  display: block;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 400;

  padding-bottom: 10px;
  margin-bottom: 15px;
  border-bottom: 1px solid black;
}
.ghost.disabled h1 {
  text-decoration: line-through;
}

.ghost h2 {
  display: block;
  font-size: 1rem;
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 5px;
}

ul,
p {
  margin-left: 20px;
  line-height: 1.5;
}
.evidences li.must {
  color: rgb(0, 162, 255);
}
</style>
