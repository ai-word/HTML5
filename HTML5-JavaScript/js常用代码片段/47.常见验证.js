var Common={
    /**

     * 检查输入字符串是否为空或者全部都是空格

     * @param  str 需要验证的字符串

     * @return bool

     */
    'isNull' : function(str) {
        if ( str == "" ) return true;
        var reg_str = "^[ ]+$";
        return reg_str.test(str);
    },
    /**

     * 验证是否为合法的手机号

     * @param mobile  手机号

     * @param reg_exp [非必传]验证规则【因为电话号码的规则有可能改，所以这个是一个参数】

     * @return bool

     */
    'isMobile' : function(mobile) {
        var reg_exp = arguments[1] ? arguments[1] : /^(((1[34578]{1}))+\d{9})$/;
        if (mobile.length == 0) {
            return false;
        }
        if (mobile.length != 11) {
            return false;
        }
        return reg_exp.test(mobile);
    },
    /**

     * 验证是否是合法的邮箱

     * @param email   邮箱地址

     * @param reg_exp [非必传]验证规则【如果有特殊需求，可以自定义规则】

     * @return bool

     */
    'isEmail' : function(email) {
        var reg_exp = arguments[1] ? arguments[1] : /^([\.a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(\.[a-zA-Z0-9_-])+/;
        if (email.length == 0) {
            return false;
        }
        return reg_exp.test(email);
    },
    /**

     * 验证是否是合法的固定电话

     * @param phone 固定电话

     * @return bool

     */
    'isPhone' : function(phone) {
        var reg_exp = /^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/;
        if (phone == "") {
            return false;
        }
        return reg_exp.test(phone);
    },
    /**

     * 验证是否是邮编

     * @param postcode 邮编

     * @return bool

     */
    'isPostcode' : function(postcode) {
        var reg_exp = /^\d{6}$/;
        if (postcode == "") {
            return false;
        }
        return reg_exp.test(postcode);
    },
    /**

     * 验证是由0-9组成的数字不能有小数点

     * @param number 数字

     * @return bool

     */
    'isNumber' : function(number) {
        var reg_exp = /^[0-9]+$/;
        if (number == "") {
            return false;
        }
        return reg_exp.test(number);
    },
    /**

     * 验证是由0-9组成的数字可以能有小数点并且保留2位

     * @param double_number 数字

     * @return bool

     */
    'isDoubleNumber' : function(double_number) {
        var reg_exp = /^[0-9]+(\.\d{2})?$/;
        if (double_number == "") {
            return false;
        }
        return reg_exp.test(double_number);
    },
    /**

     * 验证是否是中文

     * @param str 字符串

     * @return bool

     */
    'isChinese' : function(str) {
        var reg_exp = /^[\u0391-\uFFE5]+$/;
        if (str == "") {
            return false;
        }
        return reg_exp.test(str);
    }

};