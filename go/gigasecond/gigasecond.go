// Package gigasecond implements the gigasecond algorithm
package gigasecond

import (
	"math"
	"time"
)

// AddGigasecond calculates the time after pass one gigasecond and returns this value
func AddGigasecond(t time.Time) time.Time {
	gigaSecond := math.Pow(10.0, 9)

	then := gigaSecond + float64(t.Unix())

	t = time.Unix(int64(then), 0)

	return t
}
