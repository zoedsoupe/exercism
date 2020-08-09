// Package space implements the space-age algorithm
package space

// Planet represents the planet on which we want to calculate the age
type Planet string

// The duration of one earth year in seconds
const eartYear = 31557600

// Age calculates the age relative to a planet rotation cycle
func Age(ageInSeconds float64, planet Planet) float64 {
	// Planets represents the association between a planet and it's revolution
	Planets := map[Planet]float64{
		"Earth":   eartYear,
		"Mercury": eartYear * 0.2408467,
		"Venus":   eartYear * 0.61519726,
		"Mars":    eartYear * 1.8808158,
		"Jupiter": eartYear * 11.862615,
		"Saturn":  eartYear * 29.447498,
		"Uranus":  eartYear * 84.016846,
		"Neptune": eartYear * 164.79132,
	}
	return calculateAge(Planets[planet], ageInSeconds)
}

func calculateAge(planetRevolution float64, ageInSeconds float64) float64 {
	return ageInSeconds / planetRevolution
}
