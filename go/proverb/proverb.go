// Package proverb implements the proverb algorithm
package proverb

// Proverb returns the full rhyme given a list of words
func Proverb(rhyme []string) []string {
	result := make([]string, 0, 6)

	if len(rhyme) != 0 {
		proverbFinal := "And all for the want of a " + rhyme[0] + "."

		if len(rhyme) == 1 {
			result = append(result, proverbFinal)
			return result
		}
		for i := 0; i < len(rhyme)-1; i++ {
			result = append(result, "For want of a "+rhyme[i]+" the "+rhyme[i+1]+" was lost.")
		}
		result = append(result, proverbFinal)
	}

	return result
}
