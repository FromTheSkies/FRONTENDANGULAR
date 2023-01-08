let result = document.getElementById("result");

function calc() {
    result.value = eval(result.value);
}
function clearDisplay() {
    result.value = "";
}
function display(x) {
    result.value += x;
}
function square() {
    result.value = Math.sqrt(result.value);
}
function sin() {
    result.value = Math.sin(result.value);
}
function cos() {
    result.value = Math.cos(result.value);
}
