/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

export let regularPriceOfTicket = 800;
export let discountForStudent = regularPriceOfTicket * 50 / 100;
export let discountForSeniorCitizens = regularPriceOfTicket * 85 / 100;
export let age = 12;
export let category = "Student";



if(age < 10){
    console.log("Ticket is Free");
}else if(age >= 60){
    console.log(discountForSeniorCitizens)
}else if(age > 10 && category === "Student"){
    console.log(discountForStudent)
}else{
    console.log(regularPriceOfTicket)
}