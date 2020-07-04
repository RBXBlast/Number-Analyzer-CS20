// HTML Elements
let numEl = document.getElementById("numInput");

// Add Event Listener
numEl.addEventListener("change", analyzeNumber);

// Event Function
function analyzeNumber() {
  // Get Number from Input Element
  let numInput = Number(numEl.value);

  // Analyze Number and display results
  if (getSign(numInput) == "Positive") {
    document.getElementById("sign").innerHTML = "Pos";
  } else if (getSign(numInput) == "Negative") {
    document.getElementById("sign").innerHTML = "Neg";
  } else {
    document.getElementById("sign").innerHTML = "Zero";
  }

  if (evenOrOdd(numInput) == "even") {
    document.getElementById("even-odd").innerHTML = "Even";
  } else {
    document.getElementById("even-odd").innerHTML = "Odd";
  }

  if (multipleTen(numInput) == "true") {
    document.getElementById("multiple").innerHTML = "True";
  } else {
    document.getElementById("multiple").innerHTML = "False";
  }
}

function getSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "zero";
  }
}

function evenOrOdd(eONum) {
  if (eONum % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}

function multipleTen(ten) {
  if (ten % 10 == 0) {
    return "true";
  } else {
    return "false";
  }
}
