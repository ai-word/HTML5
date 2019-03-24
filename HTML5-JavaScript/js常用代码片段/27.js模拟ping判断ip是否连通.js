function ping(ip,callback){
    if(!/^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/.test(ip)){
      if(callback&&callback.error){
          callback.error();
        }
        return;
    }
    var img = new Image();
    var start = new Date().getTime();
    var flag = false;
    var isCloseWifi = false;
    var hasFinish = false;
    img.onload = function() {
      if ( !hasFinish ) {
        flag = true;
        hasFinish = true;
        if(callback&&callback.success){
          callback.success();
        }
      }
    };
    img.onerror = function() {
      if ( !hasFinish ) {
        if ( !isCloseWifi ) {
          flag = true;
          if(callback&&callback.success){
              callback.success();
          }
        } else {
          if(callback&&callback.error){
              callback.error();
          }
        }
        hasFinish = true;
      }
    };
    img.src = 'http://' + ip + '/' + start;
    setTimeout(function() {
      if ( !flag ) {
        hasFinish = true;
        flag = false ;
        if(callback&&callback.error){
          callback.error();
        }
      }
    }, 50);
  }