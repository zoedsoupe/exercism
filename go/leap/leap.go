// Package leap provides a leap yar checker
package leap

// IsLeapYear checks and return if a given year is leap or not
func IsLeapYear(year int) bool {
	return year%400 == 0 || year%4 == 0 && year%100 != 0
}
