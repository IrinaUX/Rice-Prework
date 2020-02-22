# Write your code here
def create_flowers_dict(filename):
    flower_dict = {}
    with open(filename) as f:
        for line in f:
            letter = line.split(" - ")[0].lower()
            #print(letter)
            flower = line.split(" - ")[1].strip()
            #print(flower)
            flower_dict[letter] = flower
            #print(flower_dict)
    return flower_dict
    #print("DICTIONARY" + flower_dict)
            #flower_list += line
# HINT: create a dictionary from flowers.txt

# HINT: create a function to ask for user's first and last name

def main():
    print("MAIN")
    flower_d = create_flowers_dict('flowers.txt')
    full_name = input("Enter your First [space] Last name only: ")
    first_name = full_name[0].lower()
    #print(full_name)
    first_letter = first_name[0]
    #print(first_letter)
    print("Unique flower name with the first letter: {}".format(flower_d[first_letter]))
    #print(flower_dict)
main()
