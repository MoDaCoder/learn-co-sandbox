#Variables are like "nouns" (things) Methods are like verbs (actions).


#TIP: A good practice is to define the method and then immediately close it with end before writing the body. Many expressions in Ruby use do...end and it can be confusing to keep them all straight. By creating the def (name)...end "bookends," and then filling out the implementation, we help prevent possible confusion.


#method using the variable (message) 
def say_hello_world_five_times
  message = "Hello World!"
  puts message
  puts message
  puts message
  puts message
  puts message
end


#DRY "Don't Repeat Yourself" (shorter the code the less bugs)
#It turns out the only significant predictor of fewer bugs is...fewer lines of code!


#The first line of def say_hello_world is called the method signature, it defines the basic properties of the method including the name of the method, greeting.

#PROTIP: A good practice is to define the method and then immediately close it with end before writing the body. Many expressions in Ruby use do...end and it can be confusing to keep them all straight. By creating the def (name)...end "bookends," and then filling out the implementation, we help prevent possible confusion.

def greeting # type this first
  # # Third: start typing your implementation
end # type this second


def greeting
  puts "Hello World" # Now code the body of the method.
end
#All this work defines a method. It does not run it — yet. We must define it before we can use.


#Once you define a method, you can call or execute the method whenever you want by using the method name in your code.
def greeting
  puts "Hello World"
end
 
greeting # Executing the method by name
#=> "Hello World"
 
greeting # Executing the method again
#=> "Hello World"


