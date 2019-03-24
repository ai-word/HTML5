/**
 * 通用工具组件 对原有的工具进行封装，自定义某方法统一处理<br>
 * ^_^
 *
 * Author: em.D
 * Date: 2016-05-17
 * Version: 0.0.1
 */
;
(function() {

    $.extend({
        log : function(message) {
            var now = new Date(),
                y = now.getFullYear(),
                m = now.getMonth() + 1, // ！JavaScript中月分是从0开始的
                d = now.getDate(),
                h = now.getHours(),
                min = now.getMinutes(),
                s = now.getSeconds(), time = y + '/' + m + '/' + d + ' ' + h + ':' + min + ':' + s;
            console.log(time + ' My Log: ' + message);
        }
    });
    //$.log('initializing...'); // 调用

	em = {};
	em.ajax = (function(params) {
		var pp = {
			error : function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("数据请求异常，异常状态：" + XMLHttpRequest.status);
			}
		};
		$.extend(pp, params);
		$.ajax(pp);
	});
	/**
	 * 表单提交
	 * @param from 表单ID
	 * @param params ajax参数
     *
     * @author em.D
	 */
	em.ajaxSubmit = (function(form, params) {// form 表单ID. params ajax参数
		var pp = {
			error : function(XMLHttpRequest, textStatus, errorThrown) {
                console.log("数据请求异常，异常状态：" + XMLHttpRequest.status);
			}
		};
		$.extend(pp, params);
		$(form).ajaxSubmit(pp);
	});
	CommonUtil = {
		/**
		 * ajax同步请求 返回一个html内容 dataType=html. 默认为html格式 如果想返回json.
		 * CommonUtil.ajax(url, data, "json")
		 *
         * @author em.D
		 */
		ajax : function(url, data, dataType) {
			if (!CommonUtil.notNull(dataType)) {
				dataType = "html";
			}
			var html = '没有结果!';
			// 所以AJAX都必须使用em.ajax..这里经过再次封装,统一处理..同时继承ajax所有属性
			if (url.indexOf("?") > -1) {
				url = url + "&_t=" + new Date();
			} else {
				url = url + "?_t=" + new Date();
			}
			em.ajax({
				type : "post",
				url : url,
				data : data,
				dataType : dataType,// 这里的dataType就是返回回来的数据格式了html,xml,json
				async : false,
				cache : false,// 设置是否缓存，默认设置成为true，当需要每次刷新都需要执行数据库操作的话，需要设置成为false
				success : function(data) {
					html = data;
				}
			});
			return html;
		},
		/**
		 * 判断某对象不为空..返回true 否则 false
         *
         * @author em.D
		 */
		notNull : function(obj) {
			if (obj === null) {
				return false;
			} else if (obj === undefined) {
				return false;
			} else if (obj === "undefined") {
				return false;
			} else if (obj === "") {
				return false;
			} else if (obj === "[]") {
				return false;
			} else if (obj === "{}") {
				return false;
			} else {
				return true;
			}

		},

		/**
		 * 判断某对象不为空..返回obj 否则 ""
         *
         * @author em.D
		 */
		notEmpty : function(obj) {
			if (obj === null) {
				return "";
			} else if (obj === undefined) {
				return "";
			} else if (obj === "undefined") {
				return "";
			} else if (obj === "") {
				return "";
			} else if (obj === "[]") {
				return "";
			} else if (obj === "{}") {
				return "";
			} else {
				return obj;
			}

		},
        /**
         * 判断参数(String,Array,Object)是否为undefined或者值为空, true: 为空
         */
        isEmptyValue : function(value) {
            var type;
            if(value == null) { // 等同于 value === undefined || value === null
                return true;
            }
            type = Object.prototype.toString.call(value).slice(8, -1);
            switch(type) {
            case 'String':
                return !$.trim(value);
            case 'Array':
                return !value.length;
            case 'Object':
                return $.isEmptyObject(value); // 普通对象使用 for...in 判断，有 key 即为 false
            default:
                return false; // 其他对象均视作非空
            }
        },
        /**
         * 阻止事件冒泡
         */
        preventBubble : function() {
            /*
             * return false 在事件的处理中，可以阻止默认事件和冒泡事件。
             * event.preventDefault()在事件的处理中，可以阻止默认事件但是允许冒泡事件的发生。
             * event.stopPropagation()在事件的处理中，可以阻止冒泡但是允许默认事件的发生。
             */
            var e = arguments.callee.caller.arguments[0] || event; // 若省略此句，下面的e改为event，IE运行可以，但是其他浏览器就不兼容
            if (e && e.stopPropagation) {
                // this code is for Mozilla and Opera
                e.stopPropagation();
            } else if (window.event) {
                // this code is for IE
                window.event.cancelBubble = true;
            }
        },
		loadingImg : function() {
			var html = '<div class="alert alert-warning">'
						+ '<button type="button" class="close" data-dismiss="alert">'
						+ '<i class="ace-icon fa fa-times"></i></button><div style="text-align:center">'
						//+ '<img src="' + rootPath + '/images/loading.gif"/><div>'
						+ '<img src="images/loading.gif"/><div>'
					 + '</div>';
			return html;
		},
		/**
		 * html标签转义
         *
         * @author em.D
		 */
		htmlspecialchars : function(str) {
			var s = "";
			if (str.length == 0)
				return "";
			for (var i = 0; i < str.length; i++) {
				switch (str.substr(i, 1)) {
				case "<":
					s += "&lt;";
					break;
				case ">":
					s += "&gt;";
					break;
				case "&":
					s += "&amp;";
					break;
				case " ":
					if (str.substr(i + 1, 1) == " ") {
						s += " &nbsp;";
						i++;
					} else
						s += " ";
					break;
				case "\"":
					s += "&quot;";
					break;
				case "\n":
					s += "";
					break;
				default:
					s += str.substr(i, 1);
					break;
				}
			}
		},
		/**
		 * in_array判断一个值是否在数组中
		 */
		in_array : function(array, string) {
			for (var s = 0; s < array.length; s++) {
				thisEntry = array[s].toString();
				if (thisEntry == string) {
					return true;
				}
			}
			return false;
		},
		formatNum : function(num) {
			var patt = new RegExp(/(\+|-)?(\d+)(\.\d+)?/g);
			if (!patt.test(num)) {
				return num;
			}
			var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
			var re = new RegExp("(\\d)(\\d{3})(,|$)");
			while (re.test(b)) {
				b = b.replace(re, "$1,$2$3");
			}
			return a + "" + b + "" + c;
		}
	};
})();
// 表单json格式化方法……不使用&拼接
(function($) {

    var my_blink_plug_name = "myblink";
    /**
     *
     *
        $("div").myblink({
            interval: 300,      // 闪动间隔时间，默认为100
            blink_count: 3,     // 最大闪动次数，0表示无限
            before_blink: function (obj){   // 闪动前回调方法
                $(obj).css({color: "red"});
            },
            after_blink: function (obj){    // 闪动结束回调方法
                $(obj).css({color: "black"});
            }
        });

        $("div").fadeIn(100).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
     */
    $.fn[my_blink_plug_name] = function(options) {
        var defaults = {
            interval: 100,
            blink_count: 0,
            before_blink: function(obj) {},
            after_blink: function(obj) {}
        };
        this.settings = $.extend({}, defaults, options);
        var _this = this;
        var c = 0;
        _this.settings.before_blink(_this);
        var myVar = setInterval(function() {
            if (_this.css("visibility") == "visible") {
                _this.css('visibility', 'hidden');
            } else {
                _this.css('visibility', 'visible');
                if(_this.settings.blink_count > 0) {
                    c ++;
                    if(c == _this.settings.blink_count){
                        clearInterval(myVar);
                        _this.settings.after_blink(_this);
                    }
                }
            }
        }, _this.settings.interval);
        return this;
    };

	$.fx.step["backgroundPosition"] = function(fx) {
		if (typeof fx.end == 'string') {
			fx.start = getBgPos(fx.elem);
			// fx.end原本是一个string，这里将它转换成数组，就不会再进入这个if，也方便我们下面的计算
			// 例 "0px -21px"
			fx.end = [parseFloat(fx.end.split(" ")[0]), parseFloat(fx.end.split(" ")[1])];
		}
		// 这里fx.pos是根据传入的时间参数，从0到1变化的浮点数
		var nowPosX = ((fx.end[0] - fx.start[0]) * fx.pos) + fx.start[0] + fx.unit;
		var nowPosY = ((fx.end[1] - fx.start[1]) * fx.pos) + fx.start[1] + fx.unit;
		fx.elem.style.backgroundPosition = nowPosX + ' ' + nowPosY;

		/**
		 * 获取backgroundPosition数组[top, left]，没有单位
		 */
		function getBgPos(elem) {
			var top = 0.0;
			var left = 0.0;
			if ($(elem).css("backgroundPosition")) {
				// 例 "0px -21px"
				top = parseFloat($(elem).css("backgroundPosition").split(" ")[0]);
				left = parseFloat($(elem).css("backgroundPosition").split(" ")[1]);
			} else {
				top = parseFloat($(elem).css("backgroundPositionX"));
				left = parseFloat($(elem).css("backgroundPositionY"));
			}
			return [top, left];
		}
	};

	/* end */

	/**
	 * <pre>
	 * 自定义jquery函数，完成将form 数据转换为 json格式
	 *
	 * // 将 form 数据转换 json格式
	 * var params = $(&quot;#searchForm&quot;).serializeJson(); &lt;pre&gt;
	 *
	 * @author em.D
	 *
	 */
	$.fn.serializeJson = function() {
		var serializeObj = {};    // 目标对象
		var array = this.serializeArray();    // 转换数组格式
		// var str=this.serialize();
		$(array).each(function() {    // 遍历数组的每个元素 {name : xx , value : xxx}
			if (serializeObj[this.name]) {   // 判断对象中是否已经存在 name，如果存在name
				if ($.isArray(serializeObj[this.name])) {
				    serializeObj[this.name].push(this.value);   // 追加一个值 hobby : ['音乐','体育']
				} else {
					// 将元素变为 数组 ，hobby : ['音乐','体育']
					serializeObj[this.name] = [serializeObj[this.name], this.value ];
				}
			} else {
				serializeObj[this.name] = this.value;   // 如果元素name不存在，添加一个属性 name:value
			}
		});
		return serializeObj;
	};

	/**
     * 限制只能输入数字和字母
	 */
	$.fn.onlyNumAlpha = function() {
		$(this).keypress(function(event) {
			var eventObj = event || e;
			var keyCode = eventObj.keyCode || eventObj.which;
			if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) || (keyCode >= 97 && keyCode <= 122))
				return true;
			else
				return false;
		}).focus(function() {
            this.style.imeMode = 'disabled';
        }).bind("paste", function() {
            var clipboard = window.clipboardData.getData("Text");
            if (/^(\d|[a-zA-Z])+$/.test(clipboard))
                return true;
            else
                return false;
		});
	};

	$.fn.rowspan = function(colIdx) {
	    return this.each(function() {
	        var that;
	        $('tr', this).each(function(row) {
	            $('td:eq(' + colIdx + ')', this).each(function(col) {
	                if ($(this).html() == $(that).html()) {
	                    rowspan = $(that).attr("rowSpan");
	                    if (rowspan == undefined) {
	                        $(that).attr("rowSpan", 1);
	                        rowspan = $(that).attr("rowSpan");
	                    }
	                    rowspan = Number(rowspan) + 1;
	                    $(that).attr("rowSpan", rowspan); // do your action for the colspan cell here
	                    $(this).hide(); // .remove(); // do your action for the old cell here
	                } else {
	                    that = this;
	                }
	                that = (that == null) ? this: that; // set the that if not already set
	            });
	        });
	    });
	};

    String.prototype.numFormat = function() {
        if (!CommonUtil.notNull(this)) {
			return "0";
		}

		var patt = new RegExp(/(\+|-)?(\d+)(\.\d+)?/g);
		if (!patt.test(this)) {
			return this;
		}
		var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;
		var re = new RegExp("(\\d)(\\d{3})(,|$)");
		while (re.test(b)) {
			b = b.replace(re, "$1,$2$3");
		}
		return a + "" + b + "" + c;
	};

    Date.prototype.format = function(format) {
        var o = {
            "M+" : this.getMonth() + 1, // month
            "d+" : this.getDate(), // day
            "h+" : this.getHours(), // hour
            "m+" : this.getMinutes(), // minute
            "s+" : this.getSeconds(), // second
            "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
            "S" : this.getMilliseconds()// millisecond
        };
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for ( var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };


    Array.prototype.max = function() { // 最大值
		return Math.max.apply({}, this);
	};
	Array.prototype.min = function() { // 最小值
		return Math.min.apply({}, this);
	};
    Array.prototype.indexOf = function(el) {
		for (var i = 0, n = this.length; i < n; i++) {
			if (this[i] === el) {
				return i;
			}
		}
		return -1;
	};

    /**
	 * 删除数组指定下标或指定对象
	 */
	Array.prototype.remove = function(obj) {
		for (var i = 0; i < this.length; i++) {
			var temp = this[i];
			if (!isNaN(obj)) {
				temp = i;
			}
			if (temp == obj) {
				for (var j = i; j < this.length; j++) {
					this[j] = this[j + 1];
				}
				this.length = this.length - 1;
			}
		}
	};

// 局部作用域中使用$来引用jQuery
})(jQuery);

//将form参数转为json
$.fn.serializeJson=function(){
    var serializeObj={}; // 目标对象
      var array=this.serializeArray(); // 转换数组格式
      // var str=this.serialize();
      $(array).each(function(){ // 遍历数组的每个元素 {name : xx , value : xxx}
              if(serializeObj[this.name]){ // 判断对象中是否已经存在 name，如果存在name
                    if($.isArray(serializeObj[this.name])){
                           serializeObj[this.name].push(this.value); // 追加一个值 hobby : ['音乐','体育']
                    }else{
                            // 将元素变为 数组 ，hobby : ['音乐','体育']
                            serializeObj[this.name]=[serializeObj[this.name],this.value];
                    }
              }else{
                      serializeObj[this.name]=this.value; // 如果元素name不存在，添加一个属性 name:value
              }
      });
      return serializeObj;
  }; 