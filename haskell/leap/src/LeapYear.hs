module LeapYear
  ( isLeapYear
  ) where

isDivisibleBy :: Integer -> Integer -> Bool
isDivisibleBy dividend divisor = dividend `mod` divisor == 0

isLeapYear :: Integer -> Bool
isLeapYear year =
  isDivisibleBy year 4 && not (isDivisibleBy year 100) || isDivisibleBy year 400
