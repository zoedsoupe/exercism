import { toRNA } from './rna-transcription';

describe('Transcriptor', () => {
  it('transcribes cytosine to guanine', () => {
    expect(toRNA('C')).toEqual('G');
  });

  it('transcribes guanine to cytosine', () => {
    expect(toRNA('G')).toEqual('C');
  });

  it('transcribes adenine to uracil', () => {
    expect(toRNA('A')).toEqual('U');
  });

  it('transcribes thymine to adenine', () => {
    expect(toRNA('T')).toEqual('A');
  });

  it('transcribes all dna nucleotides to their rna complements', () => {
    expect(toRNA('ACGTGGTCTTAA')).toEqual('UGCACCAGAAUU');
  });

  it('correctly handles invalid input', () => {
    expect(() => toRNA('U')).toEqual({ error: 'Invalid input DNA.' });
  });

  it('correctly handles completely invalid input', () => {
    expect(() => toRNA('XXX')).toEqual({ error: 'Invalid input DNA.' });
  });

  it('correctly handles partially invalid input', () => {
    expect(() => toRNA('ACGTXXXCTTAA')).toEqual({
      error: 'Invalid input DNA.',
    });
  });
});
