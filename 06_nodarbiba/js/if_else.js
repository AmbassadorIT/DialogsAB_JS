const hour = new Date().getHours();
let greeting = "Good ";

/*
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
*/
console.log(greeting);

if (hour < 18) {
  //greeting = "Good";
  //console.log(greeting);
  greeting = greeting + "day";
  console.log(greeting);
} else {
  //greeting = "Good";
  greeting = greeting + "evening";
  if (hour > 22) {
    greeting = greeting + " (it actually is late evening :-))";
  } else {
    greeting = greeting + " (it is not late evening yet :-))";
  }
}

console.log(greeting);

document.getElementById("demo_if_else").innerHTML = greeting;