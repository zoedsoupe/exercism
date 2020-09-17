acronym =
  phrase :: String -> begin
                       words = split(phrase);
                       reduce(word -> isletter(word[0]) ? word[0] : "", words);
                      end
