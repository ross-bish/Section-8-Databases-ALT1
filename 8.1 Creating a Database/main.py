# --------------------------
# Title: Flat File Databases
# Date:
# --------------------------

# Import the csv module
import csv

# Create a list with 5 items, these are attributes
header = ["firstName", "lastName", "phoneNum", "dob", "age"]

# Open the file for writing. Append "a" automatically adds a new line.
# By using newline = "" we can avoid this
file = open("patients.csv", "a", newline = "")
db = csv.writer(file)    # Used to create a connection to patients.csv
db.writerow(header)      # Writes the headers to the .csv file
file.close()             # Close the file afterwards


# Hard code user data
record1 = ["Joan", "Byrne", "0981 45877", "2/2/75", "45"]
record2 = ["Gideon", "Jones", "0983 76800", "4/7/59", "61"]
record3 = ["Noor", "Patel", "0983 054689", "3/6/03", "17"]

file = open("patients.csv", "a", newline = "")
db = csv.writer(file)
db.writerow(record1)
db.writerow(record2)
db.writerow(record3)
file.close()

# Reading and displaying the table from a .csv file
file = open("patients.csv", "r")

# Read the complete .csv file using "csv.reader(file)" function, then cast to a list.
records = list(csv.reader(file))    # This line returns all records includeing headers.
file.close()
print(records)

# Modify previous code to print out a 1D list, instead of a 2D list.
file = open("patients.csv", "r")
records = list(csv.reader(file))    # This line returns all records includeing headers.
file.close()

for record in records:
  print(record)

# Choosing to ignore the Attribute Labels (headers), just print the data...

print()
print("Print data without attributes:")

file = open("patients.csv", "r")
records = list(csv.reader(file))
file.close()

# Loop through .csv file, ignoring first index [0] - attributes.
for record in records[1:]:
  print(record)

'''We can pirnt the corresponding index of each attributein a record, such as age, 
which is index 4. To display only the age attribute values from each record, 
we can just display the values at index 4 for each record.'''

for record in records[1:]:
  print(record[4])

# Use string processing to format the output:

print("First Name\t Last Name\t Phone Number\t Date of Birth\t Age")
print("-----------------------------------------------------------")

for record in records[1:]:
  print(record[0], "\t\t", record[1], "\t\t", record[2], "\t", record[3], "\t\t",
        record[4])


'''Notice here we created our own attribute labels and did not display the labels 
from the .csv file,which were in camelCase'''
