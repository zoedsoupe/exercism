//Package acronym implements the acronym algorithm
package acronym

import (
	"strings"
	"unicode"
)

// Abbreviate abbreviates the given string to it acronym.
func Abbreviate(s string) string {
	result := []string{}
	f := func(c rune) bool {
		return !unicode.IsLetter(c) && !unicode.IsNumber(c) && c != rune('\'')
	}
	for _, word := range strings.FieldsFunc(s, f) {
		trimedWord := strings.TrimFunc(word, func(r rune) bool {
			return !unicode.IsLetter(r)
		})
		if len(trimedWord) > 0 {
			result = append(result, strings.ToUpper(string(trimedWord[0])))
		}
	}
	return strings.Join(result, "")
}
