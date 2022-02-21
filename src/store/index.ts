import { createStore } from "vuex";

import VuexState from "@/interfaces/VuexState";
import Ghost from "@/interfaces/Ghost";
import Evidence from "@/interfaces/Evidence";

// Ghosts
import json from "@/../data.json";

const ghosts: Ghost[] = [];

json.ghosts.forEach((ghost: Ghost) => {
  ghost.manualPossible = true;
  ghosts.push(ghost);
});

// Evidences
let evidences: string[] = [];

json.ghosts.forEach((ghost) => {
  evidences = [...evidences, ...ghost.evidences];
});

evidences = [...new Set(evidences)];
evidences.sort();

const evidenceObjects: Evidence[] = [];
evidences.forEach((evidence) => {
  evidenceObjects.push({
    type: evidence,
    state: null,
    blocked: false,
  });
});

export default createStore<VuexState>({
  state: {
    ghosts: ghosts,
    evidences: evidenceObjects,

    maps: json.maps,
    selectedMap: "",

    nightmareMode: false,
  },
  getters: {
    possibleGhosts(state) {
      const mustHaveEvidences: string[] = [];
      const mustNotHaveEvidences: string[] = [];

      state.evidences.forEach((evidence: Evidence) => {
        if (evidence.blocked) return;
        if (evidence.state === false) mustNotHaveEvidences.push(evidence.type);

        if (evidence.state) mustHaveEvidences.push(evidence.type);
      });

      const possibleGhosts: Ghost[] = [];

      state.ghosts.forEach((ghost: Ghost) => {
        let possible = true;
        mustHaveEvidences.forEach((evidence) => {
          if (!ghost.evidences.includes(evidence)) possible = false;
        });

        let notCount = 0;
        mustNotHaveEvidences.forEach((evidence) => {
          if (ghost.evidences.includes(evidence)) {
            if (state.nightmareMode) {
              notCount++;

              if (notCount > ghost.evidences.length / 2) possible = false;
            } else {
              possible = false;
            }
          }
        });

        if (possible) possibleGhosts.push(ghost);
      });

      return possibleGhosts;
    },

    evidences(state, getters) {
      let allEvidences: string[] = [];

      json.ghosts.forEach((ghost) => {
        allEvidences = [...allEvidences, ...ghost.evidences];
      });

      allEvidences = [...new Set(allEvidences)];
      allEvidences.sort();

      let remainingEvidences: string[] = [];
      getters.possibleGhosts.forEach((ghost: Ghost) => {
        remainingEvidences = [...remainingEvidences, ...ghost.evidences];
      });
      remainingEvidences = [...new Set(remainingEvidences)];

      const evidenceObjects: Evidence[] = [];

      allEvidences.forEach((evidence) => {
        const evidenceFound: Evidence | undefined = state.evidences.find(
          (x) => x.type == evidence
        );

        if (!evidenceFound) return;

        const blocked =
          !remainingEvidences.includes(evidence) && evidenceFound.state == null;
        evidenceObjects.push({
          type: evidence,
          state: evidenceFound.state,
          blocked: blocked,
        });
      });

      return evidenceObjects;
    },
  },
  mutations: {
    UPDATE_EVIDENCE_STATE(state, evidence: Evidence) {
      if (evidence.blocked) return;

      const evidenceFound: Evidence | undefined = state.evidences.find(
        (x) => x.type == evidence.type
      );

      if (!evidenceFound) return;

      if (evidence.state === null) {
        evidenceFound.state = true;
      } else if (evidence.state === true) {
        evidenceFound.state = false;
      } else {
        evidenceFound.state = null;
      }
    },

    TOGGLE_GHOST_MANUAL_POSSIBLE(state, toggleGhost: Ghost) {
      const ghost: Ghost | undefined = state.ghosts.find(
        (x) => x.type == toggleGhost.type
      );

      if (!ghost) return;

      ghost.manualPossible = !ghost.manualPossible;
    },

    UPDATE_SELECTED_MAP(state, map: string) {
      state.selectedMap = map;
    },
  },
  actions: {},
  modules: {},
});
