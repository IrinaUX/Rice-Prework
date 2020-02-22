def create_cast_list(filename):
    cast_list = []
    #use with to open the file filename
    with open("00_flying_circus_cast.txt") as f:
        #use the for loop syntax to process each line
        for actor in cast_list:
            print(actor)
            cast_list.append(actor)
        #and add the actor name to cast_list

    return cast_list

#cast_list = create_cast_list('flying_circus_cast.txt')


#create_cast_list("flying_circus_cast.txt")
