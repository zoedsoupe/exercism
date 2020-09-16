isarmstrong = x::Int64 ->
  sum(n -> n^length(digits(x)), digits(x)) === x ? true : false
