 //判断数组是否是连续数字 此方法只针对是纯数字的数组
 isContinuous = (arr) => {
    arr.sort((a, b) => a - b)
    const n0 = arr[0]
    let bool = true
    arr.forEach((item, index) => {
        if(item !== index+n0){
            bool = false
        }
    })
    return bool
}