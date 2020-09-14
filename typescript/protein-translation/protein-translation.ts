type Protein =
  | 'Methionine'
  | 'Phenylalanine'
  | 'Leucine'
  | 'Serine'
  | 'Tyrosine'
  | 'Cysteine'
  | 'Tryptophan';

const proteinMap: { readonly [k: string]: Protein } = {
  AUG: 'Methionine',
  UUU: 'Phenylalanine',
  UUC: 'Phenylalanine',
  UUA: 'Leucine',
  UUG: 'Leucine',
  UCU: 'Serine',
  UCC: 'Serine',
  UCA: 'Serine',
  UCG: 'Serine',
  UAU: 'Tyrosine',
  UAC: 'Tyrosine',
  UGU: 'Cysteine',
  UGC: 'Cysteine',
  UGG: 'Tryptophan',
};

const stop: { readonly [k: string]: boolean } = {
  UAA: true,
  UAG: true,
  UGA: true,
};

export const proteins = (
  rna: string,
  pro: readonly Protein[] = [],
  index = 0
): readonly Protein[] =>
  stop[rna.slice(index, index + 3)]
    ? pro
    : proteinMap[rna.slice(index, index + 3)] && rna.split(' ').length === 1
    ? [proteinMap[rna.slice(index, index + 3)]]
    : proteins(
        rna,
        [...pro, proteinMap[rna.slice(index, index + 3)]],
        index + 3
      );
