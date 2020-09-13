type RNA_Nucleotides = 'A' | 'C' | 'T' | 'G' | 'U';
type DNA_Nucleotides = 'A' | 'C' | 'T' | 'G';

type KeysValues = {
  readonly [key in DNA_Nucleotides]: RNA_Nucleotides;
};

type Strand = readonly DNA_Nucleotides[];

const include = (strand: Strand): boolean => {
  const includes = strand.map((nuc) =>
    /[GCTA]/gi.test(nuc)
  );

  return includes.some((bool) => bool === false) ? false : true;
};

const sToArr = (s: string): Strand => s.split('') as Strand;

const replace = (strand: readonly DNA_Nucleotides[]): string => {
  const KEYS: Readonly<KeysValues> = {
    G: 'C',
    C: 'G',
    T: 'A',
    A: 'U',
  };

  return strand.map((nuc) => KEYS[nuc]).join('');
};

const toRNA = (DNA: string): string =>
  include(sToArr(DNA)) ? replace(sToArr(DNA)) : 'Invalid input DNA.';

export { toRNA };
