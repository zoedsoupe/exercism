// Package twofer implements the two fer algorithm
package twofer

// ShareWith returns a two fer string given a name
// if no name was given, the default "you" is set
func ShareWith(name string) string {
	if name == "" {
		name = "you"
	}
	return "One for " + name + ", one for me."
}
