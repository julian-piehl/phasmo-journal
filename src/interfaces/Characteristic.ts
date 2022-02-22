interface Characteristic {
  text: string;
  question: string;
  expected: boolean | null;

  value?: boolean | null;
  obviously?: boolean;
}

export default Characteristic;
