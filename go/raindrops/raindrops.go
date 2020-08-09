// Package raindrops implement the raindrops algorithm
package raindrops

import (
	"strconv"
)

// Raindrops is the data structure to handle "conversion"
// of numbers to sounds
type Raindrops struct {
	number int
	sound  string
}

// Convert converts a number to it raindrop sound
func Convert(n int) string {
	values := []Raindrops{
		{3, "Pling"},
		{5, "Plang"},
		{7, "Plong"},
	}

	var res string

	for _, raindrop := range values {
		if n%raindrop.number == 0 {
			res += raindrop.sound
		}
	}

	if len(res) == 0 {
		return strconv.Itoa(n)
	}

	return res
}
