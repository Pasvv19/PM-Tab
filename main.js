function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
 /*   var ms = date.getMilliseconds(); // 0 - 999 */

    if (m < 10){
        m = '0' + m
    }

    if (s < 10){
        s = '0' + s
    }

  /*  if (ms < 10){
        ms = '0' + ms
    }

    if (ms < 100){
        ms = '0' + ms
    } */

    var time = h + ":" + m + ":" + s /*":" +ms */
    document.getElementById("headline").innerText = time;
    document.getElementById("headline").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();