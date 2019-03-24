// 生成指定位数的随机整数
export function randomNum(n) {
    var t = '';
    for (var i = 0; i < n; i++) {
        t += Math.floor(Math.random() * 10);
    }
    return t;
}

// 生成指定范围内的随机整数
export function randomNumRange(minNum, maxNum) {

    switch (arguments.length) {
        case 1:
            return parseInt(Math.random() * minNum + 1);
            break;
        case 2:
            return parseInt(Math.random() * (maxNum - minNum + 1) + minNum);
            break;
        default:
            return 0;
            break;
    }
}

// 随机数
export function ran() {
    // let result1 = Math.floor(Math.random() * (5) + 5);
    /*result = Math.round(Math.random()*10);*/
    /*   0~10   */
    //Math.floor(n); 返回小于等于n的最大整数。
    let result = Math.floor(Math.random() * (9) + 1);
    console.log('----------------' + result)
        /*   0~9   */
        /*result = Math.ceil(Math.random()*10);*/
        /*   1~10   */
    return result;
}

//随机颜色
var color = '#'+('00000'+(Math.random()*0x1000000<<0).toString(16)).slice(-6)
;
