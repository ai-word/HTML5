function newforEach(obj,fn) {
    var key;
    if(obj instanceof Array){
        obj.forEach(function(item,index){
            fn(item,index);
        })

    }else {
        for(key in obj){
            fn(key,obj[key]);
        }
    }
}


var arr = [1,2,3];
newforEach(arr,function (item,index) {
    console.log(item);
});


var obj = {
    x : 100,
    y :200
};

newforEach(obj,function (key,value) {
    console.log(key,value);
})