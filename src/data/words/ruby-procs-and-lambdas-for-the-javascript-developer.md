---
title: "Ruby Procs and Lambdas for the Javascript developer"
published: 2024-12-29
public: true
preview: "If you're like me and are one of the many \"Javascript everywhere\" developers joining the Ruby on Rails Renaissance you may be a little confused by Blocks,…"
---

If you're like me and are one of the many "Javascript everywhere" developers joining the Ruby on Rails Renaissance you may be a little confused by Blocks, Procs, and Lambdas, I know I was.  
  

# Functions vs Methods

To back up a little bit, let's start where the differences between Ruby and Javascript are fairly minor. Consider these two functions/methods.  
  
Javascript

```javascript
function generateMeaningOfLife(){
  return 42
}
```

  
Ruby

```ruby
def generate_meaning_of_life
  42
end
```

  
Very simple to wrap your head around. The only difference is we have to use the 'return' keyword in Javascript for our function to spit anything out whereas Ruby automatically returns the last thing defined in the method. This is known as 'implicit return'.  
  

# So you can't pass around Ruby methods?

In Javascript I am accustomed to passing around functions just like any other variable. I like having as little 'noise' in the conditional logic as possible as I find it nice to read.  
  
Javascript

```javascript
function signupUser(email){
  const emailIsValid = () => validationService.emails.validate(email)
  const sendUserWelcomeEmail = () => emailService.welcome(email)
  const error = () => console.error("Bad email!")
  emailIsValid ? sendUserWelcomeEmail() : error()
 }
```

  

So how do you do something like this in Ruby? Well I was surprised to find out you can't just assign a method to a variable. In Javascript a function only 'runs' when you 'call' it using the parentheses '()'. But in Ruby, methods don't need this. The answer is Procs & Lambdas.  
  

# Introducing Procedures (Procs)

Proc's can be thought of as similar to javascript arrow functions. You can essentially define a method and assign it to a variable so it can be passed around. To translate the function above **literally** (This is a pretty contrived example) into Ruby we can do the following.  
  
Ruby

```ruby
def signup_user(email)
  email_is_valid = proc { validation_service.emails.validate(email)}
  send_user_welcome_email = proc { email_service.welcome(email) }
  error = proc { puts "Bad email!" }
  email_is_valid.call ? send_user_welcome_email.call : error.call
end
```

  
The gotcha with Procs is that if you have a return statement it wont just return the value from the Proc, it will terminate the whole method that it's called in. For example:  
  
Ruby

```ruby
# This method will return true not 42
def generate_life_meaning
  make_babies = proc { return true }
  make_babies.call
  42
end
```

  
The method above will not return 42 but will return true. Coming from Javascript this is unexpected.  
  

# Lambdas

Lambdas are the closest equivalent to arrow functions in Javascript. They are 'special' procs that have some additional features, especially the return behaviour. A return statement in a lambda will just spit out the value from the lambda it's self, just like a regular Javascript arrow function.  
  
Ruby

```ruby
# This method returns 42
def generate_life_meaning
  make_babies = lambda { return true }
  make_babies.call
  42
end
```

  
Cheers,  
  
Oli Nelson
