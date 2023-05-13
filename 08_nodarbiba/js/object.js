const discrete_variable = 4;
const array_example = ['a','b'];
const function_example = function name_for_internal_use(x){return x*x}

const car = {
    type: "Audi",
    model: "A4",
    color: "white",
    Year: "2023",
    Nobraukums: "20 000",
    typeandmodel: function() { //tā ir metode
        return car.type + " " + car.model;
    }
};

const carname = car.type;
const ready = car.model + "car modeeel";
console.log(carname)
console.log(ready)

document.getElementById("car").innerHTML = carname + "EXAMPLEE" + "Car type is " + car.type + "and car Year is " + car.Year + 
"Nobraukums is " + car.Nobraukums;

new Mirror = {
    lengthh: "123",
    highh: "2323",

}



