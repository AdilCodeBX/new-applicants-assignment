// add reference to the input/display element by id
var result = document.getElementById('display');

//function to add a value to the input/display,the + before the = to display more times the number
function display(number) {
    result.value += number;
}

// function for calculating the result of mathematical expressions
//add eval() to evaluate the expression, input and show the result on on the display
function calculate() {
    var final_number = result.value;
    var final_result = eval(final_number);
    result.value = final_result;
}
// function to clear the contents of the input/display
function clrs() {
    result.value = '';
}
//function to reset to 0 the content on the display
function dle() {
    result.value = result.value.slice(0, -1);
}
