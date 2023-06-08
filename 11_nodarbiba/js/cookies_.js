// max cookie size - 4096 bytes (4 KB) - for nname + value
/*
1. Cookie nolasīšana
1.1. Cookie filtrēšana (atlasīšana) (domain + path; hostname:port\path1\path2 būs redzams iekš hostname:port\path1\path2 un hostname:port\path1\path2\path3 utt., bet nebūs redzams iekš hostname:port\path1)
2. Cookie uzdošana (unikāls name iekš domain + path)
3. Cookie mainīšana
4. Cookie "dzīves laika" uzdošana (ja laiks nav uzdots - Session)
5. Cookie izmantošana pēc pārlūka aizvēršanas, atvēršana
-------
6. Cookie kodēšana
7. Cookie dzēšana
*/

var str = document.cookie;
console.log("cookie vērtība: " + str);

display("username_1", "admin_1", 30);
display("username_2", "admin_2");

//document.cookie = "username_1=admin_1";
//document.cookie = "username_2=admin_1";
//str = document.cookie;
//console.log("cookie vērtība: "+str);

//document.cookie = "username=admin_2";
//str = document.cookie;
//console.log("cookie vērtība: "+str);

// https://stackoverflow.com/questions/13154552/how-can-i-set-a-cookie-with-expire-time

function display(cookie_name, cookie_value, cookie_expire_time_sec) {
  var now = new Date();
  var time = now.getTime();
  if (cookie_expire_time_sec != undefined) {
    var expireTime = time + 1000 * cookie_expire_time_sec;
    now.setTime(expireTime);
    //document.cookie = cookie_name + "=" + cookie_value + ";expires=" + now.toUTCString() + ";path=/";
  } else {
    document.cookie = cookie_name + "=" + cookie_value + ";path=/";
  }
  console.log(document.cookie);
}


//MAJASDARBS: izzināt DOM