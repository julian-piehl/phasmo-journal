import { createStore } from "vuex";

// Ghosts
import json from "./../../data.json";

const ghosts = [];

json.ghosts.forEach((ghost) => {
  ghost.manualPossible = true;
  ghosts.push(ghost);
});

// Evidences
let evidences = [];

json.ghosts.forEach((ghost) => {
  evidences = [...evidences, ...ghost.evidences];
});

evidences = [...new Set(evidences)];
evidences.sort();

const evidenceObjects = [];
evidences.forEach((evidence) => {
  evidenceObjects.push({
    type: evidence,
    state: null,
  });
});

// Possible Evidences

export default createStore({
  state: {
    ghosts: ghosts,
    evidences: evidenceObjects,

    maps: json.maps,
    selectedMap: "",
  },
  getters: {
    possibleGhosts(state) {
      const mustHaveEvidences = [];
      const mustNotHaveEvidences = [];

      state.evidences.forEach((evidence) => {
        if (evidence.blocked) return;
        if (evidence.state === false) mustNotHaveEvidences.push(evidence.type);

        if (evidence.state) mustHaveEvidences.push(evidence.type);
      });

      const possibleGhosts = [];

      state.ghosts.forEach((ghost) => {
        let possible = true;
        mustHaveEvidences.forEach((evidence) => {
          if (!ghost.evidences.includes(evidence)) possible = false;
        });
        mustNotHaveEvidences.forEach((evidence) => {
          if (ghost.evidences.includes(evidence)) possible = false;
        });

        if (possible) possibleGhosts.push(ghost);
      });

      //   let evidences = [];
      //   possibleGhosts.forEach((ghost) => {
      //     evidences = [...evidences, ...ghost.evidences];
      //   });
      //   evidences = [...new Set(evidences)];

      //   state.evidences.forEach((evidence) => {
      //     if (!evidences.includes(evidence.type) && evidence.state == null) {
      //       evidence.blocked = true;
      //     } else {
      //       evidence.blocked = false;
      //     }
      //   });

      return possibleGhosts;
    },

    evidences(state, getters) {
      let allEvidences = [];

      json.ghosts.forEach((ghost) => {
        allEvidences = [...allEvidences, ...ghost.evidences];
      });

      allEvidences = [...new Set(allEvidences)];
      allEvidences.sort();

      let remainingEvidences = [];
      getters.possibleGhosts.forEach((ghost) => {
        remainingEvidences = [...remainingEvidences, ...ghost.evidences];
      });
      remainingEvidences = [...new Set(remainingEvidences)];

      const evidenceObjects = [];
      allEvidences.forEach((evidence) => {
        const evidenceState = state.evidences.find(
          (x) => x.type == evidence
        ).state;
        const blocked =
          !remainingEvidences.includes(evidence) && evidenceState == null;
        evidenceObjects.push({
          type: evidence,
          state: evidenceState,
          blocked: blocked,
        });
      });

      return evidenceObjects;
    },
  },
  mutations: {
    UPDATE_EVIDENCE_STATE(state, evidence) {
      if (evidence.blocked) return;

      if (evidence.state === null) {
        state.evidences.find((x) => x.type == evidence.type).state = true;
      } else if (evidence.state === true) {
        state.evidences.find((x) => x.type == evidence.type).state = false;
      } else {
        state.evidences.find((x) => x.type == evidence.type).state = null;
      }
    },

    TOGGLE_GHOST_MANUAL_POSSIBLE(state, toggleGhost) {
      const ghost = state.ghosts.find((x) => x.type == toggleGhost.type);

      ghost.manualPossible = !ghost.manualPossible;
    },

    UPDATE_SELECTED_MAP(state, map) {
      state.selectedMap = map;
    },
  },
  actions: {},
});
