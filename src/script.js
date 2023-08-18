let equation = "0";
document.getElementsByClassName("outputText")[0].innerHTML = equation;
function addVal(num) { 
    if (num == "÷") {
        equation += "/";
        document.getElementsByClassName("outputText")[0].innerHTML = equation;
    }
    else if (num == "x") {
        equation += "*";
        document.getElementsByClassName("outputText")[0].innerHTML = equation;
    }
    else if (num == "+/-") {
        equation = equation * -1;
        document.getElementsByClassName("outputText")[0].innerHTML = equation;
    }
    else {
        if (equation == "0") {
            equation = "";
        }
        equation += num;
        document.getElementsByClassName("outputText")[0].innerHTML = equation; 
    }
}
function display() {
    equation = eval(equation);
    document.getElementsByClassName("outputText")[0].innerHTML = equation; 
}
function clearDisplay() {
    equation = "0";
    document.getElementsByClassName("outputText")[0].innerHTML = equation;
}
