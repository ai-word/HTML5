let onBytesToString = function (bytes) {
    let str = '';
    for (let i = 0, len = bytes.length; i < len; i++) {
        let one = bytes[i].toString(2),
            v = one.match(/^1+?(?=0)/);
        if (v && one.length == 8) {
            let bytesLength = v[0].length;
            let store = bytes[i].toString(2).slice(7 - bytesLength);
            for (let st = 1; st < bytesLength; st++) {
                store += bytes[st + i].toString(2).slice(2);
            }
            str += String.fromCharCode(parseInt(store, 2));
            i += bytesLength - 1;
        } else {
            str += String.fromCharCode(bytes[i]);
        }
    }
    return str;
}
/*
字符串转化为字节
 */
let onStringToBytes = function (str) {
    let charCode, codeArr;
    let ret = [];
    for (let i = 0, len = str.length; i < len; i++) {
        charCode = str.charCodeAt(i);
        codeArr = [];
        do {
            codeArr.push(charCode & 0xFF);
            charCode = charCode >> 8;
        }
        while (charCode);
        ret = ret.concat(codeArr.reverse());
    }
    return ret;
}

console.log(onStringToBytes('123'));//[ 49, 50, 51 ]
console.log(onBytesToString('2'));//[ 49, 50, 51 ]