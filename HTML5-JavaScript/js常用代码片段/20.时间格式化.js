Date.prototype.Format = function(fmt) {
    var o = {
      "M+" : this.getMonth()+1,                 //月份
      "d+" : this.getDate(),                    //日
      "h+" : this.getHours()%12 == 0 ? 12 : this.getHours()%12, //小时
         "H+" : this.getHours(), //小时
      "m+" : this.getMinutes(),                 //分
      "s+" : this.getSeconds(),                 //秒
      "q+" : Math.floor((this.getMonth()+3)/3), //季度
      "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt))
      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o)
      if(new RegExp("("+ k +")").test(fmt))
    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}

var  t = new Date().Format("yyyy-MM-dd HH:mm:ss");
console.log("t-",t);

/**
 * 对Date的扩展,将Date转化为指定格式的String
 * 年(y)、季度(q)、月(M)、日(d)、小时(h)、分(m)、秒(s)可以用1-2个占位符
 * 示例:
 * FormatDateCNT(new Date(),"yyyy-MM-dd hh:mm:ss")
 * @param obj   具体的日期
 * @param type  日期格式 如:yyyy年MM月dd日
 */
function FormatDateCNT(obj,type){
    var myDate = new Date(obj);
    var y = myDate.getFullYear();
    var q = Math.floor((myDate.getMonth()+3)/3);
    var M = ("0"+(myDate.getMonth()+1)).slice(-2);
    var d = ("0"+myDate.getDate()).slice(-2);
    var h = ("0"+myDate.getHours()).slice(-2);
    var m = ("0"+myDate.getMinutes()).slice(-2);
    var s = ("0"+myDate.getSeconds()).slice(-2);
    var mi = ("00"+myDate.getMilliseconds()).slice(-3);
    var current_date = '';
    if(type=="yyyy-MM-dd"){
        current_date = y + '年' + M + '月' + d + '日';
    }else if(type=="yyyy-MM-dd HH:mm:ss"){
        current_date = y + '年' + M + '月' + d + '日 ' + h + '时' + m + '分' + s + '秒';
    }
    return current_date;
}

/**
 * 对Date的扩展,将Date转化为指定格式的String
 * 年(y)、季度(q)、月(M)、日(d)、消失(h)、分(m)、秒(s)、毫秒(S)可以用1-2个占位符
 * 示例:
 * FormatDateTime(new Date(),"yyyy-MM-dd hh:mm:ss.s")
 * @param obj   具体的日期
 * @param type  日期格式 如:yyyy-MM-dd
 */
function FormatDateTime(obj,type){
    if(!obj){return obj;}
    var myDate = new Date(obj);
    var y = myDate.getFullYear();
    var q = Math.floor((myDate.getMonth()+3)/3);
    var M = ("0"+(myDate.getMonth()+1)).slice(-2);
    var d = ("0"+myDate.getDate()).slice(-2);
    var h = ("0"+myDate.getHours()).slice(-2);
    var m = ("0"+myDate.getMinutes()).slice(-2);
    var s = ("0"+myDate.getSeconds()).slice(-2);
    var mi = ("00"+myDate.getMilliseconds()).slice(-3);
    var current_date = '';
    if(type=="yyyy-MM-dd"){
        current_date = y + '-' + M + '-' + d;
    }else if(type=="yyyy-MM-dd HH:mm:ss"){
        current_date = y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
    }else if(type=="yyyy-MM-dd HH:mm:ss.s"){
        current_date = y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s + '.' + mi;
    }else if(type=="yyyy/MM/dd"){
        current_date = y + '/' + M + '/' + d;
    }else if(type=="yyyy/MM/dd HH:mm:ss"){
        current_date = y + '/' + M + '/' + d + ' ' + h + ':' + m + ':' + s;
    }else if(type=="yyyy/MM/dd HH:mm:ss.s"){
        current_date = y + '/' + M + '/' + d + ' ' + h + ':' + m + ':' + s + '.' + mi;
    }
    return current_date;
}

/**
 *
 *  @param obj   具体的日期:yyyy-mm-dd
 *  @param days  天数 如:2
 */
function addDate(obj,days)
{
    var d = new Date(obj);
    d.setDate(d.getDate()+days);
    var m =d.getMonth()+1;
    return d.getFullYear()+"-"+m+"-"+d.getDate();
}
/**
*
*  @param obj   具体的日期:yyyy-mm-dd
*  @param obj2  具体的日期:yyyy-mm-dd
*/
function retDate(obj,obj2)
{
    var d = new Date(obj);
    var d2 = new Date(obj2);
    d.setFullYear(d.getFullYear()-d2.getFullYear());
    return d.getFullYear()
}
/**
*
*  @param obj1  具体的日期  yyyy-mm-dd
*  @param obj2  具体的日期   yyyy-mm-dd
*/
function compDate(obj,obj1)
{
    var flag = false;
    var aDate =  new Date(Date.parse(obj.replace(/-/g,"/")));
    var bDate =  new Date(Date.parse(obj1.replace(/-/g,"/")));
    if(aDate < bDate)
        flag = true;
    return flag;
}
/**
*  年度相减 相差xx年
*  @param obj1  比较日期 2017-02-28
*  @param obj2  生日日期 2010-02-28
*/
function yearsubstract(obj,obj1)
{
    var adate = obj.split("-");
    var bdate = obj1.split("-");
    adate = parseInt(adate[0]);
    bdate = parseInt(bdate[0]);
    return Math.abs(bdate-adate);
}
/**
 *  年度相加
 *  @param obj1  比较日期 2017-02-28
 *  @param obj2  生日日期 2010-02-28
 */
function yearsubadd(obj,obj1)
{
    var adate = obj.split("-");
    var bdate = obj1.split("-");
    adate = parseInt(adate[0]);
    bdate = parseInt(bdate[0]);
    return Math.abs(bdate+adate);
}
/**
*  月份相减 相差xx个月
*  @param obj1  具体的日期  yyyy-mm-dd
*  @param obj2  具体的日期   yyyy-mm-dd
*/
function monthsubstract(obj,obj1)
{
    var adate = obj.split("-");
    var bdate = obj1.split("-");
    adate = parseInt(adate[0])*12+parseInt(adate[1]);
    bdate = parseInt(bdate[0])*12+parseInt(bdate[1]);
    return Math.abs(bdate-adate);
}
/**
*  天数相减 相差xx天
*  @param obj1  具体的日期  yyyy-mm-dd
*  @param obj2  具体的日期   yyyy-mm-dd
*/
function daysubstract(obj,obj1)
{
    var adate = new Date(obj.replace(/-/g,"/"));
    var bdate =  new Date(obj1.replace(/-/g,"/"));

    return (bdate.getTime()-adate.getTime())/1000/60/60/24;
}

/**
*
*  @param obj1  具体的日期  yyyy-mm-dd
*  @param obj2  具体的日期   yyyy-mm-dd
*/
function gfGetCalcPlcYear(fromdate,todate) {
    var returnyear;
    var fromdate = new Date(fromdate);
    var todate = new Date(todate);
    var birthYear = fromdate.getFullYear();
    var birthMonth = fromdate.getMonth();
    var birthDay = fromdate.getDay();
    var nowYear = todate.getFullYear();
    var nowMonth = todate.getMonth();
    var nowDay = todate.getDay();
    if (nowYear == birthYear) {
        returnyear = 0;//同年 则为0岁
    } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if (dayDiff < 0) {
                    returnyear = ageDiff - 1;
                } else {
                    returnyear = ageDiff;
                }
            } else {
                var monthDiff = nowMonth - birthMonth;//月之差
                if (monthDiff < 0) {
                    returnyear = ageDiff - 1;
                } else {
                    returnyear = ageDiff;
                }
            }
        } else {
            returnyear = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnyear;//返回周岁年龄
}

function calcage(fromdate,todate){
    var returnyear;
    var fromarry = fromdate.split("-");
    var toarry = todate.split("-");
    var birthYear = parseInt(fromarry[0]);
    var birthMonth = parseInt(fromarry[1]);
    var birthDay = parseInt(fromarry[2]);
    var nowYear = parseInt(toarry[0]);
    var nowMonth = parseInt(toarry[1]);
    var nowDay = parseInt(toarry[2]);
    if (nowYear == birthYear) {
        returnyear = 0;//同年 则为0岁
    } else {
        var ageDiff = nowYear - birthYear; //年之差
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay;//日之差
                if (dayDiff < 0) {
                    returnyear = ageDiff - 1;
                } else {
                    returnyear = ageDiff;
                }
            } else {
                var monthDiff = nowMonth - birthMonth;//月之差
                if (monthDiff < 0) {
                    returnyear = ageDiff - 1;
                } else {
                    returnyear = ageDiff;
                }
            }
        } else {
            returnyear = -1;//返回-1 表示出生日期输入错误 晚于今天
        }
    }
    return returnyear;//返回周岁年龄
}

//日期date 加年数 year
function IncYear(tdate, year){
    var nowdate = new Date(tdate);
    nowdate.setFullYear(nowdate.getFullYear()+year);
    nowdate.setDate(nowdate.getDate()-1);
    return nowdate;
}

```