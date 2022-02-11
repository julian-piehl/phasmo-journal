<template>
  <div id="evidences">
    <div
      class="evidence"
      :class="{
        enabled: evidence.state,
        disabled: !evidence.state && evidence.state != null,
        blocked: evidence.blocked,
      }"
      v-for="evidence in evidences"
      :key="evidence.type"
      @click="toggleEvidence(evidence)"
    >
      {{ evidence.type }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Evidences",
  data() {
    return {};
  },
  methods: {
    toggleEvidence(evidence) {
      this.$store.commit("UPDATE_EVIDENCE_STATE", evidence);
    },
  },
  computed: {
    evidences() {
      return this.$store.getters.evidences;
    },
  },
  //   props: {
  //     msg: String
  //   }
};
</script>

<style scoped>
#evidences {
  display: flex;
  justify-content: space-between;
  height: 120px;

  border-bottom: 1px solid black;
  background-color: #202124;
}

.evidence {
  border: 2px solid #45474e;
  flex: 1 1 0px;
  margin: 20px 10px;
  padding: 5px;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;

  font-weight: 400;
  font-size: 1.5rem;

  transition: 0.2s;
}

.evidence:first-child {
  margin-left: 20px;
}
.evidence:last-child {
  margin-right: 20px;
}

.evidence:hover:not(.blocked) {
  border: 2px solid #6d707a;
}

.evidence.enabled {
  background-color: #2e2f33;
}
.evidence.disabled,
.evidence.blocked {
  opacity: 0.5;
  color: #b4b4b4;
}
.evidence.disabled {
  text-decoration: line-through;
}
.evidence.blocked {
  cursor: default;
}
</style>
