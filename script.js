function convertTemp() {
  let temp = document.getElementById("tempInput").value;
  let unit = document.getElementById("unit").value;
  let result = document.getElementById("result");
  let error = document.getElementById("error");

  result.innerHTML = "";
  error.innerHTML = "";

  if (temp === "") {
    error.innerHTML = "⚠ Please enter a value!";
    return;
  }

  temp = parseFloat(temp);

  let c, f, k;

  if (unit === "c") {
    c = temp;
    f = (temp * 9/5) + 32;
    k = temp + 273.15;
  }
  else if (unit === "f") {
    c = (temp - 32) * 5/9;
    f = temp;
    k = c + 273.15;
  }
  else {
    k = temp;
    c = temp - 273.15;
    f = (c * 9/5) + 32;
  }

  result.innerHTML = `
    Celsius: ${c.toFixed(2)} °C <br>
    Fahrenheit: ${f.toFixed(2)} °F <br>
    Kelvin: ${k.toFixed(2)} K
  `;
}

function resetAll() {
  document.getElementById("tempInput").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("error").innerHTML = "";
}