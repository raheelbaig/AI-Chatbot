var result = 0;
function Add() {
    let number_1 = +document.getElementById("num1").value;
    let number_2 = +document.getElementById("num2").value;
    result = number_1 + number_2
    return result;
}
function Sub() {
    let number_1 = +document.getElementById("num1").value;
    let number_2 = +document.getElementById("num2").value;
    result = number_1 - number_2
    return result;
}
function Mul() {
    let number_1 = +document.getElementById("num1").value;
    let number_2 = +document.getElementById("num2").value;
    result = number_1 * number_2
    return result;
}
function Div() {
    let number_1 = +document.getElementById("num1").value;
    let number_2 = +document.getElementById("num2").value;
    result = number_1 / number_2
    return result;
}
function Result(e) {
    document.getElementById("answer").innerHTML =  result;

}