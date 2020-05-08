import random
import sys
import os
import pickle


class Stafflogin():
    def __init__(self):
        self.staff = []
        self.customer = open('customer.txt', 'a+')
        self.stafflog()

    def stafflog(self):
        while True:
            username = input('Enter Username')
            password = input('Enter Password')
            staff = open('staff.txt', 'r+')
        # customer = open('customer.txt', 'w')
        # staff.append(username)
        for lines in staff.readlines():
            if username and password != '':
                self.staff.read([username, password])
                # print(staff)
                # user = staff[0][1]
                while [username, password] in self.staff:
                    print('Create new bank account for customer')
                    accountName = input("Enter Customer Name")
                    accountBalance = int(input("Opening Balance"))
                    accountType = input("Account Type")
                    accountEmail = input("Account email")
                    accountNumber = random.randrange(3000000000, 3500000009)
                    self.customer.save(
                        str(accountName), str(accountBalance), str(
                            accountType), str(accountEmail), str(accountNumber))
                    self.customer.close()
                    print(self.customer)
                    logout = input('Do you want to logout?')
                    if logout == 'yes' or 'y':
                        sys.exit()


if __name__ == '__main__':
    S = Stafflogin()
