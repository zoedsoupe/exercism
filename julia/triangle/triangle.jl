strict_equal_sides = x -> length(Set(x))

sum = x -> begin a, b, c = sort(x); a + b > c end

zero_side = x -> count(>(0), x) < 3 ? true : false

function is_equilateral(sides)
    if zero_side(sides) || !sum(sides)
        return false
    end

    if strict_equal_sides(sides) == 1
        return true
    else
        return false
    end
end

function is_isosceles(sides)
    if zero_side(sides) || !sum(sides)
        return false
    end

    res = strict_equal_sides(sides)

    if res == 2 || res == 1
        return true
    else
        return false
    end
end

function is_scalene(sides)
    if zero_side(sides) || !sum(sides)
        return false
    end

    if strict_equal_sides(sides) == 3
        return true
    else
        return false
    end
end
