document.getElementById("myBtn").onclick = function() {
    let a = document.getElementById("myText1").value;
    let b = document.getElementById("myText2").value;
    let op = document.getElementById("myText3").value;

    a = Number(a); // Convert input to number
    b = Number(b);
    op = Number(op);

    let result;

    switch (op) {
        case 1:
            result = a + b;
            break;
        case 2:
            result = a - b;
            break;
        case 3:
            result = a * b;
            break;
        case 4:
            if (b !== 0) {
                result = a / b;
            } else {
                result = "Error: Division by zero!";
            }
            break;
        default:
            result = "Invalid choice! Please enter a number between 1 and 4.";
    }

    document.getElementById("myH3").textContent = "Result: " + result;
};
