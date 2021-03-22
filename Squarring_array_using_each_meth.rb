# Awesome it came out right but I understood some of it a lot of guessing was made on my part. lol Do you think you could walk me through what happened please

def square_array(array)
  new_array = [] 
  array.each do |num|
  new_array.push(num**2)
  end
  return new_array
end

# Ok, so first, you set new_array to be equal to an empty array
# And then you iterate over the array that's being passed in via arguments with .each
# Want to try explaining what your each loop is doing? 

# Guillermo Martinez 4 MINUTES AGO
# I believe it's picking out every element from the array one by one.

# Right - it's taking each element from array and calling it num
# And then what are we doing with num?

# Guillermo Martinez 2 MINUTES AGO
# were squaring the num and pushing it in the new array
# 1 by 1

# yep, exactly!
# And once we've iterated every element in array and done that, we return new_array, which now contains each squared element from array

