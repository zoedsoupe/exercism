//Package strand implements the RNA transcription algorithm
package strand

// ToRNA transcripts each strand of DNA to it RNA complement
func ToRNA(dna string) string {
	dnar := []rune(dna)

	if len(dnar) == 0 {
		return dna
	}

	for i := range dna {
		switch {
		case dnar[i] == 'G':
			dnar[i] = 'C'
		case dnar[i] == 'C':
			dnar[i] = 'G'
		case dnar[i] == 'T':
			dnar[i] = 'A'
		case dnar[i] == 'A':
			dnar[i] = 'U'
		}
	}

	return string(dnar)
}
