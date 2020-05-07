
# staff.close()

# customer.close()


def staff():
    staff = open('staff.txt', 'r+')
    customer = open('customer.txt', 'w')
    print(staff.read(staff['username']))


staff()
