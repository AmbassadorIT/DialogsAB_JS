const output = document.getElementById("output");

for (let decimal = 0; decimal <= 50; decimal++) {
const octal = decimal.toString(8);
const hexadecimal = decimal.toString(16).toUpperCase();
const binary = decimal.toString(2);

const row = document.createElement("tr");

row.innerHTML = `<td>${decimal}</td><td>${octal}</td><td>${hexadecimal}</td><td>${binary}</td>`;

output.appendChild(row);
}


//document.getElementById("output").innerHTML = "Today is " + day;