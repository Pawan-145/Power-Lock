//firbase 
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-analytics.js";
// const firebaseConfig = {
//     apiKey: "AIzaSyAeR13r_mKjhlWTOU26eGt6kd0dXJC5EKQ",
//     authDomain: "power-future.firebaseapp.com",
//     databaseURL: "https://power-future-default-rtdb.firebaseio.com",
//     projectId: "power-future",
//     storageBucket: "power-future.appspot.com",
//     messagingSenderId: "967849821193",
//     appId: "1:967849821193:web:5766eb86574d1e769064d8",
//     measurementId: "G-57CPJ3S2J3"
//   };
//   const app = firebase.initializeApp(firebaseConfig);
// firebase.database().ref('Power Future'); 
// firebase

let data = window.location.search;
let results = new URLSearchParams(data);
var name_one = results.get("firstName");
var name_two = results.get("lastName");
var email = results.get("email");
var contact = results.get("contact_number");
var electricityUnit = results.get('electricityUnit');
var state = results.get("state");

let nameEl = document.getElementById('name');
if (nameEl) {
    let cost_calculation_electricity = 0;
    let calculated_value = 0;
    let unitNum = parseFloat(electricityUnit) || 0;

    if (state === 'Delhi') {
        if (unitNum >= 0 && unitNum <= 200) {
            cost_calculation_electricity = unitNum * 3.00;
        } else if (unitNum >= 201 && unitNum <= 400) {
            cost_calculation_electricity = unitNum * 4.50;
        } else if (unitNum >= 401 && unitNum <= 800) {
            cost_calculation_electricity = unitNum * 6.50;
        } else if (unitNum >= 801 && unitNum <= 1200) {
            cost_calculation_electricity = unitNum * 7.00;
        } else if (unitNum > 1200) {
            cost_calculation_electricity = unitNum * 8.00;
        }
        calculated_value = cost_calculation_electricity;
    } else if (state === 'Haryana') {
        if (unitNum >= 0 && unitNum <= 50) {
            cost_calculation_electricity = unitNum * 2.00;
        } else if (unitNum >= 51 && unitNum <= 150) {
            cost_calculation_electricity = unitNum * 2.50;
        } else if (unitNum >= 151 && unitNum <= 250) {
            cost_calculation_electricity = unitNum * 5.25;
        } else if (unitNum >= 251 && unitNum <= 500) {
            cost_calculation_electricity = unitNum * 6.30;
        } else if (unitNum > 500 && unitNum <= 800) {
            cost_calculation_electricity = unitNum * 7.10;
        } else if (unitNum > 800) {
            cost_calculation_electricity = unitNum * 7.10;
        }
        calculated_value = cost_calculation_electricity;
    } else if (state === 'Uttar Pradesh (Rural Area)') {
        if (unitNum >= 0 && unitNum <= 100) {
            cost_calculation_electricity = unitNum * 3.35;
        } else if (unitNum >= 101 && unitNum <= 150) {
            cost_calculation_electricity = unitNum * 3.85;
        } else if (unitNum >= 151 && unitNum <= 300) {
            cost_calculation_electricity = unitNum * 5.00;
        } else if (unitNum > 300) {
            cost_calculation_electricity = unitNum * 5.50;
        }
        calculated_value = cost_calculation_electricity;
    } else if (state === 'Uttar Pradesh (Urban)') {
        if (unitNum >= 0 && unitNum <= 150) {
            cost_calculation_electricity = unitNum * 5.50;
        } else if (unitNum >= 151 && unitNum <= 300) {
            cost_calculation_electricity = unitNum * 6.00;
        } else if (unitNum > 300) {
            cost_calculation_electricity = unitNum * 6.50;
        }
        calculated_value = cost_calculation_electricity;
    }

    let result_email = document.getElementById('email');
    let result_contact = document.getElementById('contact');
    let result_state = document.getElementById('user_state');
    let result_value = document.getElementById('result_value');
    let inputValue = document.getElementById('electricity_unit');
    let homepage_button = document.querySelector('.home');
    let feedback = document.getElementById('feedback');

    nameEl.innerText = (name_one || "") + " " + (name_two || "");
    if (result_email) result_email.innerText = email || "N/A";
    if (result_state) result_state.innerText = state || "N/A";
    if (result_value) result_value.innerText = `${calculated_value.toFixed(2)} Rs`;
    if (result_contact) result_contact.innerText = contact || "N/A";
    if (inputValue) inputValue.innerText = electricityUnit || "0";

    if (feedback) {
        if (!electricityUnit) {
            feedback.innerText = "No data provided";
        } else if (calculated_value >= 0 && calculated_value <= 200) {
            feedback.innerText = "Very Good";
        } else if (calculated_value >= 201 && calculated_value <= 400) {
            feedback.innerText = "Good";
        } else if (calculated_value >= 401 && calculated_value <= 800) {
            feedback.innerText = "Medium";
        } else if (calculated_value >= 801 && calculated_value <= 1200) {
            feedback.innerText = "Bad";
        } else if (calculated_value > 1200) {
            feedback.innerText = "Very Bad";
        }
    }

    if (homepage_button) {
        homepage_button.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
}

//  let getData = "Name : " + name_one+""+name_two+"<br>";
//     getData += "Email : "+email+"<br>";
//     getData += "Contact Number: "+contact+"<br>";
//     getData += "Electricity per unit: "+electricityUnit+"<br>";
//     getData += "State : "+ state+"<br>";
//     getData += "Result : " + calculated_value; 
// document.getElementById("res").innerHTML = getData;



//firebase data tranfer
// let submit  = document.querySelector('.Btn');
// submit.addEventListener('submit',save);
// const save = (totalName,contact,email,state,electricityUnit) => {
//     let submission = power_future.push();
//     submission.set({
//         Name : totalName,
//         ContactNo : contact,
//         Email : email,
//         State : state,
//         Electricity : electricityUnit,

//     });
// }
//data firbase transfer