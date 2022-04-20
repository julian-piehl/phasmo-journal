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

<script lang="ts">
import Evidence from "@/interfaces/Evidence";
import { Vue } from "vue-class-component";

export default class Evidences extends Vue {
  get evidences(): Evidence[] {
    return this.$store.getters.evidences;
  }

  toggleEvidence(evidence: Evidence): void {
    this.$store.commit("UPDATE_EVIDENCE_STATE", evidence);
  }
}
</script>

<style scoped lang="scss">
#evidences {
  display: flex;
  justify-content: space-between;
  height: 120px;

  border-bottom: 1px solid black;
  background-color: #202124;

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

    &:first-child {
      margin-left: 20px;
    }
    &:last-child {
      margin-right: 20px;
    }

    &:hover:not(.blocked) {
      filter: brightness(150%);
    }

    &.enabled {
      background-color: $positive-background;
      border-color: $positive;
    }
    &.disabled {
      text-decoration: line-through;
      background-color: $negative-background;
      border-color: $negative;
    }
    &.blocked {
      cursor: default;
      opacity: 0.3;
    }
    &.disabled,
    &.blocked {
      color: #b4b4b4;
    }
  }
}
</style>
