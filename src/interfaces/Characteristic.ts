interface Characteristic {
  text: string;
  question: string;
  expected: boolean | null;

  value?: boolean | null;

  successShow: boolean;
  errorShow: boolean;
  showOnly?: boolean;
}

export default Characteristic;
