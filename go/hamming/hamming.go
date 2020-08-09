// Package hamming implements hamming algorithm
package hamming

import (
	"errors"
)

// Distance return the hamming length of a DNA strand or an error
func Distance(a, b string) (int, error) {
	ar, br := []rune(a), []rune(b)

	if len(ar) != len(br) {
		return 0, errors.New("strands have different lengths")
	}

	count := 0

	for i := range ar {
		if ar[i] != br[i] {
			count++
		}
	}

	return count, nil
}
