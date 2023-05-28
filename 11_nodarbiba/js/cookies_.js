// max cookie size is 4096 bytes or 4KB

var str = document.cookie;
console.log("cookie vērtība:" + str);

document.cookie = "username=admin";

display();

function display() {
    var now = new Date();
    var time = now.getTime();
    var expireTIme = time + 1000*15;
    now.setTime(expireTIme);
    document.cookie = `cookie=ok; expires=` + now.toUTCString()+`;path=/`;
    console.log(document.cookie);

}