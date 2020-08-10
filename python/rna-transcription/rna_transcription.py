def to_rna(dna: str) -> str:
    """  transcribe a DNA string to RNA and return as another string """
    translate_table = dna.maketrans('GCTA', 'CGAU')

    rna = dna.translate(translate_table)

    return(rna)
