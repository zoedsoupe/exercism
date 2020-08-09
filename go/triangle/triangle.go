// Package triangle provides a triangle type checker algorithm
package triangle

import (
	"math"
	"sort"
)

// Kind indicates of what type is the triangle
type Kind int

const (
	// NaT == not a triangle
	NaT Kind = iota
	// Equ == triangle is equilateral
	Equ
	// Iso == triangle is isosceles
	Iso
	// Sca == triangle is scalene
	Sca
)

// KindFromSides checks if a given triangle
// is equilateral, isosceles or scalene
func KindFromSides(a, b, c float64) Kind {
	sides := [3]float64{a, b, c}
	sort.Float64s(sides[:])

	// validate if is a triangle
	if sides[0]+sides[1] < sides[2] {
		return NaT
	}

	// validate sides
	for _, val := range sides {
		if val <= 0 || math.IsNaN(val) || math.IsInf(val, 0) {
			return NaT
		}
	}

	if sides[0] == sides[1] && sides[0] == sides[2] {
		return Equ
	}

	if sides[0] == sides[1] || sides[0] == sides[2] || sides[1] == sides[2] {
		return Iso
	}

	return Sca
}
