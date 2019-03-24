function splitByLength(src, len) {
    if (src === null || src === undefined) {
        throw new Error("src 不能为 null 或 undefined");
    }

    if (src === "") {
        return [];
    }

    if (Object.prototype.toString.call(src) !== "[object String]") {
        throw new Error("src 必须是 String 类型");
    }

    len = parseInt(len);

    if (!len || len <= 0) {
        throw new Error("分割的长度不合法");
    }

    if (src.length <= len) {
        return [src];
    }

    let result = [];
    let sIndex = 0;
    let eIndex = len;
    while (src.length > sIndex) {
        result.push(src.slice(sIndex, eIndex));
        sIndex += len;
        eIndex += len;
    }

    return result;
}