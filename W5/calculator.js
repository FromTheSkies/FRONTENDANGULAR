let result = document.getElementById("result");

function calc() {
    result.value = eval(result.value);
}
function clear() {
    result.value = "";
}
function display(x) {
    result.value += x;
}
function square(){
    result.value = Math.sqrt(result.value);
}
