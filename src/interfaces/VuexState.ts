import Ghost from "../interfaces/Ghost";
import Evidence from "../interfaces/Evidence";

interface VuexState {
  ghosts: Ghost[];
  evidences: Evidence[];

  maps: string[];
  selectedMap: string;
}

export default VuexState;
