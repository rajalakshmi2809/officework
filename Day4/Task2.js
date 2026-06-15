// Task 2: Rest Parameter Task Create a function called totalMarks.
//  Requirements: Accept any number of marks Return total marks Use Rest Parameter 
//  Example totalMarks(80, 90, 70, 60);




function totalMarks(...marks) {
    let total = 0;

    for (let mark of marks) {
        total += mark;
    }

    return total;
}


console.log(totalMarks(80, 90, 70, 60)); 