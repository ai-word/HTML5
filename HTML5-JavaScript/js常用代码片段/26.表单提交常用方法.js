function submitForm(id, callback) {
    var form = $(id);
    submitFormIframe(form, callback)
}

function submitFormIframe(form, callback) {
    var url = form.attr('action');
    var obj = serializeForm(form);
    if (url !== '' && url !== undefined) {
        postSomething(url, obj, callback);
    } else {
        console.log('url empty');
    }
    return false;
}

function serializeForm(obj) {
    var params = {};
    $.each($(obj).serializeArray(), function (index, param) {
        if (!(param.name in params)) {
            params[param.name] = param.value;
        }
    });
    return params;
}

function postSomething(url, obj, callback) {
    $.ajax({
        type: "POST",
        url: url,
        enctype: 'multipart/form-data',
        data: obj,
        success: function (res) {
            if (callback === undefined) {
                callback = function (res) {
                    if (res.code) {
                        layer.msg(res.msg, { icon: 1, time: 1500 }, function () {
                            window.location.href = res.url;
                        });
                    } else {
                        layer.msg(res.msg, { icon: 2, time: 1500 });
                    }
                };
            }
            callback(res);
        }
    });
}