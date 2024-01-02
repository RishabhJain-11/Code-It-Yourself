# import array as arr
# a = arr.array('i', [1, 2, 3])
# print("The new created array is : ", end = " ")
#
# for i in range(0, 3):
#     print(a[i], end = " ")
#
# print()
#
# b = arr.array('d', [2.5, 3.2, 3.3])
# print("\n The new created array is : ", end = " ")
#
# for i in range(0, 3):
#     print(b[i], end = " ")
import array
import array as arr
# a = arr.array('i', [1,2,3])
# print("Array before insertion : ", end = " ")
#
# for i in range(0, 3):
#     print(a[i], end = " ")
#
# print()
#
# a.insert(1, 4)
# print("Array after insertion: ", end = " ")
# for i in (a):
#     print(i, end = " ")

# b = arr.array('d', [2.5, 3.2, 3.3])
# print("Array before insertion: ", end = " ")
# for i in range(0, 3):
#     print(b[i], end = " ")
# b.append(4.4)
# print()
# print("Array after insertion : ", end = " ")
# for i in (b):
#     print(i, end = " ")

# import array as arr
# a = arr.array('i', [1,2,3,4,5,6,7])
# print("Access element is: ", a[0])
# print("Access element is: ", a[3])
#
# b = arr.array('d', [2.5, 3.2, 3.3])
# print("Access element is: ", b[1])
# print("Access element is: ", b[2])

import array as arr
# arr = array.array('i', [1,2,3,4,5,6])
# print("The new created array is: ", end = "")
#
# for i in range(0, 5):
#     print(arr[i], end = " ")

# my_array = arr.array('i', [1,2,3,2,5,2,3])
# count = my_array.count(2)
# print("Number of occurrences of 2 : ", count)

# my_arr = arr.array('i', [1,2,3,4,5])
# print("Original Array: ", *my_arr)
# my_arr.reverse()
# print("Reversed Array: ", *my_arr)

# a = arr.array('i', [1,2,3,4,5])
# print("The before arr extend : ", end = "")
# for i in range(0, 5):
#     print(a[i], end = " ")
# print()
#
# a.extend([6,7,8,9,10])
# print("\nThe array after extend: ", end = " ")
#
# for i in range(0, 10):
#     print(a[i], end = " ")
# print()

# a = arr.array('i', [1,2,3,4,5,6])
# print("The before extend array is : ", end = " ")
#
# for i in range(0, 6):
#     print(a[i], end = " ")
# print()
#
# a.extend([7,8,9,10,11,12])
# print("\n the after extend array is : ", end = " ")
#
# for i in range(0, 12):
#     print(a[i], end = " ")
# print()
#
# b = arr.array('d', [2.1, 2.2, 2.3, 2.4, 2.5, 2.6])
# print("\nthe before extend array is : ", end = " ")
# for i in range(0, 6):
#     print(b[i], end = " ")
# print()
#
# b.extend([2.6, 2.7, 2.8, 2.9])
# print("\n the after extend array is: ", end = " ")
# for i in range(0, 9 + 1):
#     print(b[i], end = " ")
# print()

# a = 3
# b = 9
# if b % a == 0:
#     print("b is divisible by a")
# elif b + 1 == 10:
#     print("Increment in b produces 10")
# else:
#     print("You are in else statement")

# def checkDivisibilty(a, b):
#     if a % b == 0:
#         print("a is divisible by b")
#     else:
#         print("a is not divisible by b")
# checkDivisibilty(4,2)

# def f():
#     global s
#     s += 'GFG'
#     print(s)
#     s = "Look for GeeksfotGeeks Python Section"
#     print(s)
#
# s = "Python is great!"
# f()
# print(s)

# def fun1(a,b,c):
#     print(a,b,c)

# def fun2(*args):
#     args=list(args)
#     args[0] = 'GeeksForGeeks'
#     args[1] = 'awesome'
#     fun1(*args)
# fun2('Hello', 'beautiful', 'world!')

# a, b = 10, 20
# min = a if a < b else b
# print(min)

# print("Both a and b are equal" if a == b
#       else "a is greater than b" if a > b
#       else "b is greater than a")
#
# print({True:a, False:b} [a < b])

# print(a, "is greater") if (a>b) \
#     else print(b, "is greater")

# import operator

# x = operator.iadd(a,b)
# print("The value after adding and assigning: ", end = "")
# print(x)
#
# x = operator.itruediv(10, 5)
# print("The value after subtracting and assigning: ", end ="")
# print(x)

x, y = 5, 10
x,y = y,x
print(x, y)
