/*function counter(paragraph_name){
let text = "";
let i = 1;
while (i <= 200) {
    if (i < 10) {
  text += "<br>" + 0 + 0 + i + " funkcija"; 
    } else if (i >= 10 && i < 100) { // var arī optimizēt un atstāt tikai (i < 100)
        text += "<br>" + 0 + i + " funkcija";
    } else {
        text += "<br>" + i + " funkcija";
    }
    i++;
  }
document.getElementById(paragraph_name).innerHTML = text;
}

counter("demo_function_1");

counter("demo_function_2");
*/


/*
text = "";
i = 1;
while (i <= 200) {
    if (i < 10) {
  text += "<br>" + 0 + 0 + i; // text = text + "<br>" + i;
    } else if (i >= 10 && i < 100) {
        text += "<br>" + 0 + i;
    } else {
        text += "<br>" + i;
    }
    i++; // i++; // i = i + 1 // 
  }
document.getElementById("demo_function_2").innerHTML = text;
*/


function counter(paragraph_name, a, b){
    let text = "";
    let i = 1;
    while (i <= 20) {
        if (i % a == 0) {
      text += "<br>The number is divided by a " + i; 
        } else if (i % b == 0) {
        text += "<br>The number is divided by b " + i; 
        }
        i++; 
      }
    document.getElementById(paragraph_name).innerHTML = text;
}
    counter("demo_function_1",2,0);
    
    counter("demo_function_2",1,3);