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

/*
function counter(paragraph_name, a, b){
    let text = "";
    let i = 1;
    while (i <= 20) {
        if (i % a == 0) {
      text += "<br>The number is divided by " + a + " " + "result is " + i; 
        } else if (i % b == 0) {
        text += "<br>The number is divided by " + b + i; 
        }
        i++; 
      }
    document.getElementById(paragraph_name).innerHTML = text;
}
    counter("demo_function_1",2,);
    
    counter("demo_function_2", 0,3);
    */
//------------NOKOPEJU NO PASNIEDZEJA----
    function counter(paragraph_name, end_value, step_value){
        let text = "";
        let i = 1;
      
        while (i <= end_value) {
          //console.log("i: " + i);
          //console.log("i%2: " + (i % 2));
          if (i % step_value == 0) {
            text += "<br>" + i;
          }
          i++;
        }
        document.getElementById(paragraph_name).innerHTML = text;
        // return i;
        return [i, i*i];
      }
      // u(t) = t*t;
      
      //var cits_i;
      //cits_i = counter("demo_function_1",20,2);
      //console.log("Mainīgā i vērtība pēc funkcijas darbināšanas: " + cits_i);
      
      //cits_i = counter("demo_function_2",40,3);
      //console.log("Mainīgā i vērtība pēc funkcijas darbināšanas: " + cits_i);
      
      var funkcijas_darbiibas_rezultaati;
      funkcijas_darbiibas_rezultaati = counter("demo_function_1",20,2);
      console.log("Pirmā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[0]);
      console.log("Otrā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[1]);
      
      funkcijas_darbiibas_rezultaati = counter("demo_function_2",40,3);
      console.log("Pirmā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[0]);
      console.log("Otrā rezultāta vērtība pēc funkcijas darbināšanas: " + funkcijas_darbiibas_rezultaati[1]);
      
      // MAJASDARBS: 1. Piemerus ar ""funkcijas darbibas rezultati" pameginat un palasit "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions"

      
      /*
      text = "";
      i = 1;
      while (i <= 20) {
        console.log("i: " + i);
        console.log("i%2: " + (i % 3));
        if (i % 3 == 0) {
          text += "<br>" + i;
        }
        i++;
      }
      
      document.getElementById("demo_function_2").innerHTML = text;
      */