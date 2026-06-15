// Task 6: Default Parameters Task Create a function welcomeUser().
//  Requirements: If name is passed → print name If no name passed → print "Guest" Example welcomeUser(); welcomeUser("Ravi");

function welcomeUser(name = "Guest") {
    console.log("Welcome " + name);
}

welcomeUser();        
welcomeUser("Ravi");  





