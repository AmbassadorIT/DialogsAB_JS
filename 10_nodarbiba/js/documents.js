const some_element = document.getElementById('hello');
console.log(some_element);

let btn = document.getElementById('btnRate');
let output = document.getElementById('output');

btn.addEventListener('click', () => {
    let rates = document.getElementsByName('rate');
    console.log(rates);
    console.log(typeof(rates));
    rates.forEach((rate) => {
        console.log(rate);
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    });

    for (rate of rates){
        console.log(rate);
        if (rate.checked) {
            output.innerText = `You selected: ${rate.value}`;
        }
    }



});