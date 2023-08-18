let equation = "0";
document.getElementsByClassName("output")[0].innerHTML = equation;
function addVal(num) { 
    if (num == "÷") {
        equation += "/";
        document.getElementsByClassName("output")[0].innerHTML = num;
    }
    else if (num == "x") {
        equation += "*";
        document.getElementsByClassName("output")[0].innerHTML = num;
    }
    else if (num == "+/-") {
        equation = equation * -Math.sign(equation);
        document.getElementsByClassName("output")[0].innerHTML = equation;
    }
    else {
        equation += num;
        document.getElementsByClassName("output")[0].innerHTML = num; 
    }
}
function display() {
    equation = eval(equation);
    document.getElementsByClassName("output")[0].innerHTML = equation; 
}
function clearDisplay() {
    equation = "0";
    document.getElementsByClassName("output")[0].innerHTML = equation;
}
