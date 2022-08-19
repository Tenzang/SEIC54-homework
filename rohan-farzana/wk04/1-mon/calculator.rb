def show_menu
    puts "Calculator" #TODO ckeck out. cemter to amke tis look nice
    puts "=-" * 40 #Budhet horizontal ficifig line 
    puts "[a]" - Addition
    #TODO: add pther operations here (mutiply, divide, substract)
    puts :"[q] - Quit"
    print "Enter your choice: "
end 

show_menu 

menu_choice = gets/chomp.downcase

until nemu_choice =='q'
    case menu_choice 
    when 'a'
        puts ""
