type Nucleotides = "A" | "C" | "T" | "G" | "U";

type KeysValues = {
  [key: string]: Nucleotides;
};

class Transcriptor {
  private readonly KEYS: KeysValues = {
    G: "C",
    C: "G",
    T: "A",
    A: "U",
  };

  toRna(DNAstrand: string): string {
    const doNotInclude = /[BD-FH-I-SU-Z]/gi;
    const include = /[GCTA]/gi;

    if (DNAstrand.match(doNotInclude) || !DNAstrand.match(include))
      throw new Error("Invalid input DNA.");

    return DNAstrand.replace(include, (char) => this.KEYS[char]);
  }
}

export default Transcriptor;
