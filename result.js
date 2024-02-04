let data = window.location.search;
let results = new URLSearchParams(data);
// console.log(results);
var name_one  = results.get("firstName");
var name_two = results.get("lastName");
var email  = results.get("email");
var contact = results.get("contact_number");
var electricityUnit  = results.get('electricityUnit');
var state = results.get("state");
console.log(state);
let cost_calculation_electricity;
let calculated_value;
if (state === 'Delhi')
{
    if(electricityUnit>= 0 && electricityUnit <= 200)
    {
         cost_calculation_electricity = electricityUnit * 3.00;
        calculated_value = cost_calculation_electricity;
          
    }
    else if(electricityUnit >= 201 && electricityUnit <= 400)
    {
        cost_calculation_electricity = electricityUnit * 4.50;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >= 401 && electricityUnit <= 800)
    {
        cost_calculation_electricity = electricityUnit * 6.50;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >= 801 && electricityUnit <= 1200)
    {
        cost_calculation_electricity = electricityUnit * 7.00;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit > 1200)
    {
        cost_calculation_electricity = electricityUnit * 8.00;
        calculated_value = cost_calculation_electricity;
    }
}
else if(state === 'Haryana'){
    if(electricityUnit>= 0 && electricityUnit <= 50)
    {
         cost_calculation_electricity = electricityUnit * 2.00;
        calculated_value = cost_calculation_electricity;
          
    }
    else if(electricityUnit >= 51 && electricityUnit <= 150)
    {
        cost_calculation_electricity = electricityUnit * 2.50;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >= 151 && electricityUnit <= 250)
    {
        cost_calculation_electricity = electricityUnit * 5.25;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >= 251 && electricityUnit <= 500)
    {
        cost_calculation_electricity = electricityUnit * 6.30;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit > 501 && electricityUnit <= 800)
    {
        cost_calculation_electricity = electricityUnit * 7.10;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit > 800)
    {
        cost_calculation_electricity = electricityUnit * 7.10;
        calculated_value = cost_calculation_electricity;
    }
}
else if (state === 'Uttar Pradesh (Rural Area)'){
    if(electricityUnit>= 0 && electricityUnit <= 100)
    {
         cost_calculation_electricity = electricityUnit * 3.35;
        calculated_value = cost_calculation_electricity;
          
    }
    else if(electricityUnit >= 101 && electricityUnit <= 150)
    {
        cost_calculation_electricity = electricityUnit * 3.85;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >= 151 && electricityUnit <= 300)
    {
        cost_calculation_electricity = electricityUnit * 5;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >300)
    {
        cost_calculation_electricity = electricityUnit * 5.50;
        calculated_value = cost_calculation_electricity;
    }
}
else if(state === 'Uttar Pradesh (Urban)')
{ 
    if(electricityUnit>= 0 && electricityUnit <= 150)
    {
         cost_calculation_electricity = electricityUnit * 5.50;
        calculated_value = cost_calculation_electricity;
          
    }
    else if(electricityUnit >= 151 && electricityUnit <= 300)
    {
        cost_calculation_electricity = electricityUnit * 6;
        calculated_value = cost_calculation_electricity;
    }
    else if(electricityUnit >300)
    {
        cost_calculation_electricity = electricityUnit * 6.50;
        calculated_value = cost_calculation_electricity;
    }
}


let name  = document.getElementById('name');
let result_email = document.getElementById('email');
let result_contact = document.getElementById('contact');
let result_state = document.getElementById('user_state');
let result_value = document.getElementById('result_value');
let inputValue = document.getElementById('electricity_unit');
let homepage_button = document.querySelector('.home');
let feedback = document.getElementById('feedback');
name.innerText = name_one+" "+name_two;
result_email.innerText = email;
result_state.innerText = state;
result_value.innerText = `${calculated_value} Rs`;
result_contact.innerText = contact;
inputValue.innerText = electricityUnit;

if (calculated_value >= 0 && calculated_value <= 200)
{
    feedback.innerText = "Very Good";
}
else if(calculated_value >= 201 && calculated_value <= 400)
{
    feedback.innerText = "Good";
}
else if(calculated_value >= 401 && calculated_value <= 800)
{
    feedback.innerText = "Medium";
}
else if(calculated_value >= 800 && calculated_value <= 1200)
{
    feedback.innerText = "Bad";
}
else if(calculated_value >1200)
{
    feedback.innerText = "Very Bad";
}

homepage_button.addEventListener('click',() =>{
   window.location.href = 'index.html';
});

//  let getData = "Name : " + name_one+""+name_two+"<br>";
//     getData += "Email : "+email+"<br>";
//     getData += "Contact Number: "+contact+"<br>";
//     getData += "Electricity per unit: "+electricityUnit+"<br>";
//     getData += "State : "+ state+"<br>";
//     getData += "Result : " + calculated_value; 
// document.getElementById("res").innerHTML = getData;
