
//首先将下面的的HTML代码嵌入页面中形成一个透明的遮罩层
/*<div id="tm" style="width: 100%;opacity: 0;z-index: 9999;position: absolute;top: 0;left: 0;"></div>*/
//JS代码如下如下
$(doucument).ready(function(){
    var ispoped=false;
    var w=$('body').css('height');//获取整个文档的高度
    $('#tm').css('height',w);//使遮罩层的高度和文档的高度一致
    $(document).click(function(){
        if (!ispoped)
        {
            window.open('./index.html');
            ispoped = true;
            $('#tm').css('display','none');

        }
    });

})