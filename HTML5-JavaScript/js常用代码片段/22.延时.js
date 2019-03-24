function sleep(n){
    var start = new Date().getTime();
    while (true){
        if (new Date().getTime()- start > n)
            break;
    }
}

/**
 * 睡眠指定的时间
 * @param seconds 秒数
 */
function sleep(seconds) {
    var now = new Date();
    var exitTime = now.getTime() + (seconds * 1000);
    while (true) {
        now = new Date();
        if (now.getTime() > exitTime) {
            return;
        }
    }
}