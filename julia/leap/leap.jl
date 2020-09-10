"""
    is_leap_year(year)

Return `true` if `year` is a leap year in the gregorian calendar.

"""
is_diviseble_by = fn(x, y) = x % y == 0 

function is_leap_year(year)
  return is_diviseble_by(year, 4) && (!is_diviseble_by(year, 100) || is_diviseble_by(year, 400))
end

