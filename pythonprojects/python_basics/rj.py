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

# import random
#
# secret_number = random.randint(1, 500)
# print ("Pick a number between 1 to 500")
# while True:
#     res = input("Guess the number: ")
#     if res == secret_number:
#         print("You win")
#         break
#     else:
#         print("You Lose")
#         continue




# class Dog:
#     attr1 = "mammal"
#
#     def __init__(self, name):
#         self.name = name
#
# Rodger = Dog("Rodger")
# Tommy = Dog("Tommy")
#
# print("Rodger is a {}".format(Rodger.__class__.attr1))
# print("Tommy is also a {}".format(Tommy.__class__.attr1))
# print("His name is {}".format(Rodger.name))
# print("And his name is {}".format(Tommy.name))

# class Person(object):
#     def __init__(self, name, idnumber):
#         self.name = name
#         self.idnumber = idnumber
#
#     def display(self):
#         print(self.name)
#         print(self.idnumber)
#
#     def details(self):
#         print("my name is {}".format(self.name))
#         print("id number: {}".format(self.idnumber))
#
# class Employee(Person):
#     def __init__(self, name, idnumber, salary, post):
#         self.salary = salary
#         self.post = post
#
#         Person.__init__(self, name, idnumber)
#
#     def details(self):
#         print("My name is {}".format(self.name))
#         print("idno.: {}".format(self.idnumber))
#         print("Post: {}".format(self.post))
#
# a = Employee('Rahul', 886012, 20000000, "Intern")
#
# a.display()
# a.details()

# class Bird:
#     def intro(self):
#         print("There are many types of birds")
#
#     def flight(self):
#         print("Most of the birds can fly but some cannot")
#
# class Crow(Bird):
#     def flight(self):
#         print("Crows can fly")
#
# class Pigeon(Bird):
#     def flight(self):
#         print("Pigeon can fly")
#
# obj_bird = Bird()
# obj_spr = Crow()
# obj_pig = Pigeon()
#
# obj_bird.intro()
# obj_bird.flight()
#
# obj_pig.intro()
# obj_pig.flight()

class Base:
    def __init__(self):
        self.a = "GeeksforGeeks"
        self.__c = "GeeksforGeeks"


# Creating a derived class
# class Derived(Base):
#     def __init__(self):
#         # Calling constructor of
#         # Base class
#         Base.__init__(self)
#         print("Calling private member of base class: ")
#         print(self.__c)
#
#
# # Driver code
# obj1 = Base()
# print(obj1.a)

from datetime import date

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

        @classmethod
        def fromBirthYear(cls, name, year):
            return cls(name, date.today().year - year)

        @staticmethod
        def isAdult(age):
            return age > 18

person1 = Person("Rishabh", 21)
person2 = Person.fromBirthYear('Rishabh', 2002)

print(person1.age)
print(person2.age)

print(Person.isAdult(22))