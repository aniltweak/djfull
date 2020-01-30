def bs(a):
    # a = name of list
    b = len(a) - 1  # minus 1 because we always compare 2 adjacent values

    for x in range(b):
        for y in range(b - x):
            if a[y] > a[y + 1]:
                a[y], a[y + 1] = a[y + 1], a[y]
    return a


a = [32, 5, 3, 6, 7, 54, 87]
bs(a)
print(a)



# def bs(a):
#     # a = name of list
#     b = len(a) - 1  # minus 1 because we always compare 2 adjacent values
#     print(len(a))
#     print("0",b)
#     for x in range(b):
#         print("x",x)
#         print("b-x",b-x)
#         for y in range(b - x):
#             print("x",x)
#             print("y", y)
#             print("values",a[y],a[y+1])
#             if a[y] > a[y + 1]:
#                 a[y], a[y + 1] = a[y + 1], a[y]
#                 print("4", a[y], a[y + 1])
#     return a
#
#
# a = [32, 5, 3, 6, 7, 54, 87]
# bs(a)
# print(a)