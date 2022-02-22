import Characteristic from "./Characteristic";

interface Ghost {
  type: string;
  evidences: string[];
  strength: string;
  weakness: string;

  manualPossible?: boolean;

  characteristics: Characteristic[];
}

export default Ghost;
