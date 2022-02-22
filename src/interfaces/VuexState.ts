import Ghost from "./Ghost";
import Evidence from "./Evidence";

interface VuexState {
  ghosts: Ghost[];
  evidences: Evidence[];

  maps: string[];
  selectedMap: string;

  nightmareMode: boolean;
}

export default VuexState;
