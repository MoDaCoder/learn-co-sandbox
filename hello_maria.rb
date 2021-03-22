def greeting_a_person(name)
 puts "Hello #{name}"
end
greeting_a_person("Maria")


def greeting(name)
  puts "Hello, #{name}!"
end
greeting("Maria,Ruby") #The method accepts 1 argument and I supplied 2.
# > ArgumentError: wrong number of arguments (2 for 1)


def greeting(parameter)
  puts"Hello,#{parameter}
end
greeting(argument)