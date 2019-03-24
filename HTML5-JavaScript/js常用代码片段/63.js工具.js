/**
 * 获取浏览器版本以及版本号
 */
function getBrowser() {
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var flag = null;
    switch (true) {
        case userAgent.indexOf("Opera") > -1:
            flag = 'o';
            break;
        case userAgent.indexOf("Firefox") > -1:
            flag = 'f';
            break;
        case userAgent.indexOf("Chrome") > -1:
            flag = 'c';
            break;
        case userAgent.indexOf("Safari") > -1:
            flag = 's';
            break;
        case userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1:
            new RegExp("MSIE (\\d+\\.\\d+);").test(userAgent);
            var ieVer = parseFloat(RegExp["$1"]);
            switch (true) {
                case ieVer == 5.5:
                    flag = 'i5.5';
                    break;
                case ieVer == 6:
                    flag = 'i6';
                    break;
                case ieVer == 7:
                    flag = 'i7';
                    break;
                case ieVer == 8:
                    flag = 'i8';
                    break;
                case ieVer == 9:
                    flag = 'i9';
                    break;
            }
            break;

    }
    return flag;
}

/**
 * 请求是否来自PC
 * @returns {boolean}
 */
var fromPC = function () {
    var result = true;
    (function (a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) result = false;
    })(navigator.userAgent || navigator.vendor || window.opera);
    return result;
};

/**
 * 节流函数
 * @param {Function} fn
 * @param {Number} delay
 * @returns {Function}
 */
function throttle (fn, delay) {
  return function () {
    const context = this
    const args = arguments
    clearTimeout(timer)
    timer = setTimeout(function () {
      fn.apply(context, args)
    }, delay)
  }
}

/**
 * 获取地址栏参数
 * @param key 参数名
 */
var getParam = function (key) {
    var reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
    var r = window.location.search.substring(1).match(reg);
    return r ? decodeURI(r[2]) : null;
};

/**
 * 获取窗口宽高
 * @returns {{width: number, height: number}}
 */
var getWindowSize = function () {
    var w = 0, h = 0;
    if (!window.innerWidth) {
        w = (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth);
        h = (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight);
    } else {
        w = window.innerWidth;
        h = window.innerHeight;
    }
    return {width: w, height: h};
};

/**
 * 获取滚动条宽度
 * @returns {number}
 */
function getScrollBarWidth() {
    var oP = document.createElement('p');
    oP.style.width = '100px';
    oP.style.height = '100px';
    oP.style.overflowY = 'scroll';
    document.body.appendChild(oP);
    var scrollBarWidth = oP.offsetWidth - oP.clientWidth;
    oP.parentNode.removeChild(oP);
    return scrollBarWidth;
}

/**
 * 获取元素的最终样式
 * @param ele 元素节点
 * @param attr css属性名
 */
var getStyle = function (ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele, false)[attr];
};

/**
 * 事件穿透
 * @param ele
 */
var noPointerEvents = function (ele) {
    ele.onclick = ele.onmouseover = function (e) {
        this.style.display = 'none';
        var x = e.pageX, y = e.pageY,
            under = document.elementFromPoint(x, y);
        this.style.display = '';
        e.stopPropagation();
        e.preventDefault();
        $(under).trigger(e.type);
    };
};

/**
 * 对象属性数量
 * @param obj
 * @returns {number}
 */
var propCount = function (obj) {
    var i = 0;
    for (var o in obj) obj.hasOwnProperty(o) && i++;
    return i;
};

/**
 * cookie操作
 * @type {{getItem: docCookies.getItem, setItem: docCookies.setItem, removeItem: docCookies.removeItem, hasItem: docCookies.hasItem, keys: docCookies.keys}}
 */
var docCookies = {
    getItem: function (sKey) {
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) {
            return false;
        }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!sKey || !this.hasItem(sKey)) {
            return false;
        }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + ( sDomain ? "; domain=" + sDomain : "") + ( sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    keys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nIdx = 0; nIdx < aKeys.length; nIdx++) {
            aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]);
        }
        return aKeys;
    }
};

/**
 * 深度克隆对象
 * @param objectToBeCloned
 * @returns {*}
 */
var deepClone = function (objectToBeCloned) {
    // 基本类型
    if (!(objectToBeCloned instanceof Object)) {
        return objectToBeCloned;
    }
    var objectClone;
    // 克隆特殊对象
    var Constructor = objectToBeCloned.constructor;
    switch (Constructor) {
        case RegExp:
            objectClone = new Constructor(objectToBeCloned);
            break;
        case Date:
            objectClone = new Constructor(objectToBeCloned.getTime());
            break;
        default:
            objectClone = new Constructor();
    }
    // 克隆每个属性
    for (var prop in objectToBeCloned) {
        objectClone[prop] = deepClone(objectToBeCloned[prop]);
    }
    return objectClone;
};

/**
 * 深度克隆对象（不适用属性有函数以及循环引用的对象）
 * @param objectToBeCloned
 */
var simplyDeepClone = function (objectToBeCloned) {
    var objectClone = Object.assign({}, objectToBeCloned);
    return JSON.parse(JSON.stringify(objectClone));
};


/**
 * @class 分页器
 * @returns {Pager}
 */
function Pager() {
	/**
	 * @property {object}  opts
	 * @property {number}  defaults.pageSize        - 一页显示数量
	 * @property {number}  defaults.aroundCount     - 当前页码两边各需要显示的数量
	 * @property {string}  defaults.leftCount       - 左边栏需要显示的页数
	 * @property {object}  defaults.rightCount      - 右边栏需要显示的页数
	 */
	var opts = arguments[0] || {};
	var pageSize = opts.pageSize || 10;
	var aroundCount = opts.aroundCount || 1;
	var centerCount = aroundCount * 2 + 1;
	var leftCount = opts.leftCount || centerCount,
		rightCount = opts.rightCount || centerCount;
	var threshold = leftCount + centerCount + rightCount;
	this.pageRange = [];
	this.resetOpts = function (newOpts) {
		pageSize = newOpts.pageSize || 10;
		aroundCount = newOpts.aroundCount || 1;
		centerCount = aroundCount * 2 + 1;
		leftCount = newOpts.leftCount || centerCount;
		rightCount = newOpts.rightCount || centerCount;
		threshold = leftCount + centerCount + rightCount;
	};
	this.update = function (totalCount, currentPage) {
		this.pageRange = [];
		if (!totalCount || !totalCount) return this;
		var i = 1;
		var pageCount = parseInt(totalCount / pageSize);
		totalCount % pageSize > 0 && pageCount++;
		this.pageCount = pageCount;
		this.currentPage = Math.max(1, Math.min(currentPage, pageCount));
		if (pageCount <= threshold) {
			for (i = 1; i <= pageCount; i++) {
				this.pageRange.push(i);
			}
		} else {
			var leftPage = currentPage - aroundCount;
			var rightPage = currentPage + aroundCount;

			if (leftPage - leftCount <= 1) {  // 与左侧有交集
				rightPage = Math.max(rightPage, leftCount);
				for (i = 1; i <= rightPage; i++) {
					this.pageRange.push(i);
				}
				this.pageRange.push(null);
				for (i = pageCount - rightCount + 1; i <= pageCount; i++) {
					this.pageRange.push(i);
				}
			} else if (pageCount - rightPage <= rightCount) {  // 与右侧有交集
				for (i = 1; i <= leftCount; i++) {
					this.pageRange.push(i);
				}
				this.pageRange.push(null);
				leftPage = Math.min(leftPage, pageCount - rightCount + 1);
				for (i = leftPage; i <= pageCount; i++) {
					this.pageRange.push(i);
				}
			} else {  // 居中
				for (i = 1; i <= leftCount; i++) {
					this.pageRange.push(i);
				}
				this.pageRange.push(null);
				for (i = leftPage; i <= rightPage; i++) {
					this.pageRange.push(i);
				}
				this.pageRange.push(null);
				for (i = pageCount - rightCount + 1; i <= pageCount; i++) {
					this.pageRange.push(i);
				}
			}
		}
		return this;
	};
	return this;
}


// 回到顶部功能实现
window.onscroll = function () {
    if(document.documentElement.scrollTop+document.body.scrollTop>300){
      //@TODO	向上按钮显示
      }else{
      //@TODO	向上按钮隐藏
      }
  };
  function  goToTop(){
      window.scroll(0,0);
  }

  //对象的深拷贝
  function deepCopy(source) {
    var result = {};
      for (var key in source) {
          result[key] = typeof source[key] === 'object' ? deepCoyp(source[key]) : source[key];
      }
      return result;
  }

  //移除HTML标签（会移除尖括号内的所有东西）
  function removeHTMLTag(str) {
    str = str.replace(/<\/?[^>]*>/g, ''); //去除HTML tag
      str = str.replace(/[ | ]*\n/g, '\n'); //去除行尾空白
      //str = str.replace(/\n[\s| | ]*\r/g,'\n'); //去除多余空行
      str = str.replace(/&nbsp;/ig, ''); //去掉&nbsp;
      return str;
  }

  //获取一个数字数组中的最大值或最小值
  var  numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
  var maxInNumbers = Math.max.apply(Math, numbers);
  var minInNumbers = Math.min.apply(Math, numbers);


  //判断对象是否是数组
  function isArray(obj){
      return Object.prototype.toString.call(obj) === '[object Array]' ;
  }


  //判断参数是否是数字
  function isNumber(n){
      return !isNaN(parseFloat(n)) && isFinite(n);
  }

  // 对数字字符串进行排序 如："0,2,5,7,8,9,14,21,3,6"--->"0,2,3,5,6,7,8,9,14,21"
  function sortStr(str) {
    var tmp_arr = str.split(",");
      tmp_arr = tmp_arr.sort(function (a, b) {
              if (parseInt(a) > parseInt(b))
                  return true;
          });
      return tmp_arr.join(",");
  }


  //对对象数组里的对象属性排序
  // sort方法会把数字数组转化为字符串数组然后排序
  data = [{"name":"a","age":20},{"name":"b","age":10},{"name":"c","age":3}];
  function sortByAttr(attr) {
    return function (obj1, obj2) {
          if (obj1[attr] < obj2[attr]) {
              return -1;
          } else if (obj1[attr] > obj2[attr]) {
              return 1;
          } else {
              return 0;
          }
      }
  }
   data.sort(sortByAttr("name"));


   //string的trim函数 ECMAScript 5 新增方法
  String.prototype.trim =String.prototype.trim|| function(){return this.replace(/^\s+|\s+$/g, "");};


  /** * 对Date的扩展，将 Date 转化为指定格式的String
     *  月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q)可以用 1-2 个占位符
       * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
       * eg:
       * (new Date()).pattern("yyyy-MM-dd hh:mm:ss.S")==> 2006-07-02 08:09:04.423
       * (new Date()).pattern("yyyy-MM-dd E HH:mm:ss") ==> 2009-03-10 二 20:09:04
       * (new Date()).pattern("yyyy-MM-dd EE hh:mm:ss") ==> 2009-03-10 周二 08:09:04
       * (new Date()).pattern("yyyy-MM-dd EEE hh:mm:ss") ==> 2009-03-10 星期二 08:09:04
       * (new Date()).pattern("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18
       * */
      Date.prototype.pattern = Date.prototype.pattern||function (fmt) {
          var o = {
              "M+" : this.getMonth() + 1, //月份
              "d+" : this.getDate(), //日
              "h+" : this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时
              "H+" : this.getHours(), //小时
              "m+" : this.getMinutes(), //分
              "s+" : this.getSeconds(), //秒
              "q+" : Math.floor((this.getMonth() + 3) / 3), //季度
              "S" : this.getMilliseconds() //毫秒
          };
          var week = {
              "0" : "/u65e5",
              "1" : "/u4e00",
              "2" : "/u4e8c",
              "3" : "/u4e09",
              "4" : "/u56db",
              "5" : "/u4e94",
              "6" : "/u516d"
          };
          if (/(y+)/.test(fmt)) {
              fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
          }
          if (/(E+)/.test(fmt)) {
              fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "/u661f/u671f" : "/u5468") : "") + week[this.getDay() + ""]);
          }
          for (var k in o) {
              if (new RegExp("(" + k + ")").test(fmt)) {
                  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
              }
          }
          return fmt;
      }


  // 把数字数组打乱输出
  var numbers = [5, 458 , 120 , -215 , 228 , 400 , 122205, -85411];
  numbers = numbers.sort(function(){ return Math.random() - 0.5});
  //把数字数组按升序排列
  numbers = numbers.sort(function(a,b){ return parseInt(a)-parseInt(b)});



  //生成随机的数字字母字符串 number.toString(36)是将这个数字转换成36进制（0-9，a-z）
  function generateRandomAlphaNum(len){
    var rdmStr="";
      for(;rdmStr.length<len;rdmStr+=Math.random().toString(36).substr(2));
      return rdmStr.substr(0,len);
  }


  //在特定范围内获取一个随机数
  var  x = Math.floor(Math.random() * (max - min + 1)) + min;


  //js 把参数转数组最简单方法
  function testArguments(){
    var m = Array.prototype.slice.call(arguments);
      return m.sort();
  }


  //倒计时
  function showCountDown(year,month,day){
    var now=new Date();
      var endDate = new Date(year,month-1,day);
      var leftsecond = (endDate.getTime()-now.getTime())/1000;
      var day1 = Math.floor(leftsecond/(60*60*24));
      var hour = Math.floor((leftsecond-day1*60*60*24)/60/60);
      var minute = Math.floor((leftsecond-day1*60*60*24-hour*3600)/60);
      var second = Math.floor(leftsecond-day1*60*60*24-hour*3600-minute*60);
      console.log("距离"+year+"年"+month+"月"+day+"日还有："+day1+"天"+hour+"小时"+minute+"分"+second+"秒");
  }
  var myInterval = setInterval(function(){showCountDown(2015,1,1);},1000);


  //显示当前时间
  function showTime() {
    setInterval(getTimes, 1000);
      getTimes();
      function getTimes() {
          var time = new Date();
          var hours = time.getHours();
          var minutes = time.getMinutes();
          var seconds = time.getSeconds();
          hours = hours < 10 ? ("0" + hours) : hours;
          minutes = minutes < 10 ? ("0" + minutes) : minutes;
          seconds = seconds < 10 ? ("0" + seconds) : seconds;
          console.log(hours + ":" + minutes + ":" + seconds);
      }
  }


  //计算字节数
  function byteLength(str) {
    var byteLen = 0, len = str.length;
      if( !str ) return 0;
      for( var i=0; i<len; i++ )
          byteLen += str.charCodeAt(i) > 255 ? 2 : 1;
      return byteLen;
  }


  //在控制台引入jquery的方法
  (function () {
  //方法一；插入节点在倒数第二元素
    var m = document.createElement("script")
          m.src = "http://libs.baidu.com/jquery/1.9.1/jquery.js";
      var n = document.getElementsByTagName("head")[0];
      n.insertBefore(m,n.lastChild);
      //方法二；插入节点为最后一个元素
      var m = document.createElement("script")
          m.src = "http://libs.baidu.com/jquery/1.9.1/jquery.js";
      var n = document.getElementsByTagName("head")[0];
      n.appendChild(m);
  })();