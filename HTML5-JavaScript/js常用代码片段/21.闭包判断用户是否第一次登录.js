    //闭包的运用 封装变量 、收敛权限
    function isFirstLoad() {
        var _list = [];
        return function (val) {
            if(_list.indexOf(val) !== -1){
                return false
            }else {
                _list.push(val);
                return true;
            }
        }
    }


    var first = isFirstLoad();
   console.log(first(10));
   console.log(first(10));
   console.log(first(20));
   console.log(first(20));
