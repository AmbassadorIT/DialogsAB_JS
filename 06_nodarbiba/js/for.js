const cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let text = "";
for (let i = 0; i < cars.length; i++) {
 // text += cars[i] + "<br>";
 console.log(i);
 console.log("text mainīgā saturs pirms izmaiņām"  + "\n"  + text);
 text = text + cars[i] + "<br>";
 console.log("text mainīgā saturs pēc izmaiņām"  + "\n"  + text + "\n\n");
}

document.getElementById("demo_for").innerHTML = text;