@array = {0=>false, 1=>true, 2=>true, 3=>true, 4=>true, 5=>true, 6=>true, 7=>true}

array = []
 chain = 0

@array.each { |key, value|
  if key != 0
    if value == true && @array[key - 1] == true
      chain += 1
    else
      chain = 0
    end
    array << chain
  end
}
puts array.max
