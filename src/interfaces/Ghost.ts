import Characteristic from "./Characteristic";

interface Ghost {
  type: string;
  evidences: string[];
  strength: string;
  weakness: string;

  manualPossible?: boolean;

  characteristics: Characteristic[];

  secret?: boolean;
}

export default Ghost;
