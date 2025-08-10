/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let myMarks = 0;

if(myMarks >= 90 && myMarks <= 100){
    console.log("My Grade is A")
} else if(myMarks >= 80 && myMarks <= 89){
    console.log("My Grade is B")
}else if(myMarks >= 70 && myMarks <= 79){
    console.log("My Grade is C")
}
else if(myMarks >= 60 && myMarks <= 69){
    console.log("My Grade is D")
}else if(myMarks >= 0 && myMarks <= 59){
    console.log("My Grade is F")
}