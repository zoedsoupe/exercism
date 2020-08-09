def to_rna(dna_strand: str) -> str:
    dna_strand.split()
    print(dna_strand)
    for nuc in dna_strand:
        if nuc == "G":
            nuc = "C"
        elif nuc == "C":
            nuc = "G"
        elif nuc == "T":
            nuc = "A"
        elif nuc == "A":
            nuc = "U"

    return dna_strand
