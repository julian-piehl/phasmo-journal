interface Ghost {
  type: string;
  evidences: string[];
  strength: string;
  weakness: string;

  manualPossible?: boolean;
}

export default Ghost;
