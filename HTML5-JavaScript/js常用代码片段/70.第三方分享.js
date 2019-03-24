/**
 * Created by limuzi on 16/8/4.
 */
var title = "Today便利店";
var link = commonUrl + "/today/page/loadInfo.html"
var imgUrl = "http://7xufoi.com1.z0.glb.clouddn.com/todayShareLogo.png";
//var imgUrl = "http://7xrcch.com2.z0.glb.qiniucdn.com/lxjshare.jpg";
var desc = "Todayhahahahah便利店"
$(function() {
    var locationurl = window.location.href;
    $.ajax({
        url: commonUrl + "/service/restful/weixin?url=" + locationurl + "&partnerId=" + partnerId + "&op=getConfig",
        async: true,
        type: "get",
        //data: JSON.stringify({ 'url': locationurl,'partnerId':partnerId,'op':'getConfig'}),
        dataType: 'json',
        success: function(data) {
            console.log(data)
            var jsconfig = data;
            console.log(data)
            wx.config(jsconfig);
            wx.ready(function() {
                wx.hideMenuItems({
                    menuList: ["menuItem:share:email", "menuItem:openWithQQBrowser", "menuItem:openWithSafari"] // 要隐藏的菜单项，只能隐藏“传播类”和“保护类”按钮，所有menu项见附录3
                });
                //分享到朋友圈
                wx.onMenuShareTimeline({
                    title: title, // 分享标题
                    link: link, // 分享链接
                    desc: desc,
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

                //分享给朋友
                wx.onMenuShareAppMessage({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //分享到QQ
                wx.onMenuShareQQ({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });
                //分享到空间
                wx.onMenuShareQZone({
                    title: title, // 分享标题
                    desc: desc, // 分享描述
                    link: link, // 分享链接
                    imgUrl: imgUrl, // 分享图标
                    success: function() {
                        // 用户确认分享后执行的回调函数
                    },
                    cancel: function() {
                        // 用户取消分享后执行的回调函数
                    }
                });

            });
        }
    });
})
