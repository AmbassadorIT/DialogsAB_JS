

/*let text = "";
let i = 0;
while (i <= 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("demo").innerHTML = text;
*/

/* let text = "";
let i = 1;
while (i <= 20) {
    console.log("i: "+ i);
    //console.log("i%2: "+ (i % 2));
    if (i % 2 == 0) {
  text += "<br>The number is " + i; // text = text + "<br>" + i;
    } 
    i++; // i++; // i = i + 1 // 
  }
document.getElementById("demo").innerHTML = text;

*/


//--------------------
/*let text = "";
let i = 2;
while (i <= 20) {
    console.log("i: "+ i);
    if (i % 2 == 0) {
  text += "<br>The number is " + i; // text = text + "<br>" + i;
    } 
    i = i + 2; // i++; // i = i + 1 // 
  }
document.getElementById("demo").innerHTML = text;
*/

let text = "";
let i = 1;
while (i <= 20) {
    if (i < 10) {
  text += "<br>" + 0 + i; // text = text + "<br>" + i;
    } else {
        text += "<br>" + i;
    }
    i++; // i++; // i = i + 1 // 
  }
document.getElementById("demo").innerHTML = text;
