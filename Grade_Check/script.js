const inputValue = +document.getElementById('percentage').value;
const Result = document.getElementById('result');
const checkBtn = document.getElementById('checker');

function check() {
    if (inputValue >= 90 ) {
        Result.innerText = "A1"
    }
    else if (inputValue >= 80) {
        Result.innerText = "A+"
    }
    else if (inputValue >= 70) {
        Result.innerText = "A"
    }
    else if (inputValue >= 60) {
        Result.innerText = "B"
    }
    else if (inputValue >= 50) {
        Result.innerText = "C"
    }
    else if (inputValue < 50) {
        Result.innerText = "FAIL"
    }
}

checkBtn.addEventListener('click', check);

check();