const temp = +document.getElementById("Temp").value;
const checkBtn = document.getElementById("checker"); 
const Result = document.getElementById("result");


function temperature() {
    if ( temp >= 25 ) {
        Result.innerText = "Dont Carry Jacket"
    }else if ( temp <= 25 ) {
        Result.innerText = "Carry Jacket"
    }else if ( temp <= 15 ) {
        Result.innerText = "Carry Coat"
    }else if ( temp <= 0 ) {
        Result.innerText = "Don't go out"
    }        
};

checkBtn.addEventListener('click',temperature); 

temperature();