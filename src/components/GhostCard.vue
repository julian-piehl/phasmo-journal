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

<script lang="ts">
import { Vue } from "vue-class-component";
import { Prop } from "vue-property-decorator";

import Ghost from "@/interfaces/Ghost";
import Evidence from "@/interfaces/Evidence";

export default class GhostCard extends Vue {
  @Prop()
  ghost: Ghost | undefined = undefined;

  isMustEvidence(evidence: string): boolean {
    const evidences: Evidence[] = this.$store.getters.evidences;

    const evidenceFound = evidences.find((x) => x.type == evidence);

    if (!evidenceFound) return false;
    return evidenceFound.state == true;
  }

  togglePossible(): void {
    this.$store.commit("TOGGLE_GHOST_MANUAL_POSSIBLE", this.ghost);
  }
}
</script>

<style scoped lang="scss">
.ghost {
  border: 1px solid #45474e;

  min-width: 300px;

  padding: 20px;
  padding-top: 10px;
  margin: 10px;

  transition: 0.2s;

  &.disabled {
    opacity: 0.25;
    user-select: none;

    h1 {
      text-decoration: line-through;
    }
  }

  h1 {
    cursor: pointer;

    display: block;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;

    padding-bottom: 10px;
    margin-bottom: 15px;
    border-bottom: 1px solid black;
  }

  h2 {
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
    color: $positive-text;
  }
}
</style>
