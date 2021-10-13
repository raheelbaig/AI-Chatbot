
function check() {
    var inputValue = +document.getElementById("percentage").value;
    const Result = document.getElementById('result');

    if (inputValue >= 90 ) {
        Result.innerText = "Your Grade is A1"
    }
    else if (inputValue >= 80) {
        Result.innerText = "Your Grade is A+"
    }
    else if (inputValue >= 70) {
        Result.innerText = "Your Grade is A"
    }
    else if (inputValue >= 60) {
        Result.innerText = "Your Grade is B"
    }
    else if (inputValue >= 50) {
        Result.innerText = "Your Grade is C"
    }
    else if (inputValue < 50) {
        Result.innerText = " You are FAIL"
    }
}

