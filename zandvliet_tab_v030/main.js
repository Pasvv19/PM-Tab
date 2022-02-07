function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    // var s = date.getSeconds(); // 0 - 59

    if (m < 10){
        m = '0' + m
    }

    var time = h + ":" + m
    document.getElementById("headline").innerText = time;
    document.getElementById("headline").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();