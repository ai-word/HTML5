function base2blob(base) {
    base = base.split(",");
    var mime = base[0].split(':')[1].split(';')[0];
    base = atob(base[1]);
    return new Blob([s2ab(base)], {
        type: mime
    });
}

function s2ab(s) { //字符串转字符流
    var buf = new ArrayBuffer(s.length);
    var view = new Uint8Array(buf);
    for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
}

function blob2base(b, u8, callback) {
    if (typeof(u8) == "function") {
        [callback, u8] = [u8, false];
    }
    var reader = new FileReader(); //通过 FileReader 读取blob类型
    reader.onload = function() {
        callback(u8 ? this.result.replace(";base64,", ";charset=utf-8;base64,") : this.result); //base64编码
    }
    reader.readAsDataURL(b);
}