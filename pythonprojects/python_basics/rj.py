# def shout(text):
#     return text.upper()
# def whisper(text):
#     return text.lower()
# def greet(func):
#     greeting = func("""Hi, I am created by a function passed as an argument.""")
#     print(greeting)
#
# greet(shout)
# greet(whisper)

# def create_adder(x):
#     def adder(y):
#         return x + y
#     return adder
#
# add_15 = create_adder(15)
# print(add_15(12))

# def hello_decorator(func):
#     def inner1():
#         print("Hello, this is before function execution")
#         func()
#         print("This is after function execution")
#     return inner1
#
# def function_to_be_used():
#     print("this is inside the function")
#
# function_to_be_used = hello_decorator(function_to_be_used)
# function_to_be_used()

# help(print)

import random

secret_number = random.randint(1, 500)
print ("Pick a number between 1 to 500")
while True:
    res = input("Guess the number: ")
    if res == secret_number:
        print("You win")
        break
    else:
        print("You Lose")
        continue














# Shahid Kapoor v/s Suriya
# Ranbir Kapoor v/s Dhanush
# Hrithik Roshan v/s Thalapathy Vijay
# Vicky Kaushal v/s Vikram Chiyaan
# Varun Dhawan  v/s Karthi