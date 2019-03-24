/**
 *
 * 动画
Hide() 隐藏元素
Show() 显示元素
Offset()获取元素相对于当前视窗的偏移量
Position()获取元素相对于最近的拥有position或relative样式的祖先的相对偏移量 position.left和position.top
scrollTop()和scrollLeft()获取元素滚动条距离顶端和左侧的距离，也可以传入参数，指定滚动条到达的位置
fadeIn(时间,回调)渐渐淡出
fadeOut(时间,回调)渐渐淡入
fadeToggle(时间，回调)淡入淡出间来回切换
fadeTo(时间，透明度，回调)允许渐变为给定的不透明度 单向的
slideDown(时间，回调)渐渐拉下来
slideUp(时间，回调)渐渐拉上去
slideToggle(时间，回调)上拉下拉来回切换
Animate(发生变化的内容，时间，回调) 可以花括号多个键值对 也可以设置相对值
Stop()立刻停止当前元素的动画
Ajax
Load(加载文件路径，文件内容筛选正则，回调函数) 其中回调函数形参为
 ["<img src='img/2.gif' >", "success", Object, callee: function, Symbol(Symbol.iterator): function]
事件
鼠标事件
Mouseenter() 鼠标移入触发的事件
Mouseleve() 鼠标移出触发的事件
Mousedown() 鼠标移动到元素上并按下鼠标触发的事件
Mouseup() 鼠标移动到元素上并释放鼠标触发的事件
Hover()鼠标移入移出触发函数一二

Click() 鼠标单击事件
Dbclick() 鼠标双击事件

Focus()鼠标获得焦点时触发的事件
Blur()鼠标失去焦点的时候触发的事件
阻止事件冒泡
Event.stopPropagation()阻止事件冒泡 也可以事件函数 return false
Event.preventDefault()阻止元素的默认行为 也可以事件函数 return false
Event.type获取事件类型
Event.target获取触发事件的元素
Event.pageX 和event.pageY分别获取鼠标相对于当前窗口的位置
Event.which获取鼠标按键 1,2，3左中右
移除事件和添加事件
Unbind()和bind()
单独移除某个事件可以事先给给元素上的所有事件函数添加函数名

DOM节点元素操作
添加 更改节点位置
Append() 添加元素到选择的元素下面的最后一个  appendto()颠倒  父子
Prepend() 添加元素到选择的元素下面的第一个   prependto()颠倒  父子
After() 添加元素到选择的元素后面  insterafter()颠倒   兄弟
Before() 添加元素到选择的元素前面  interbefore()颠倒  兄弟
删除
Remove()移出元素节点，但是在此加入该元素事件不在 同级
detach()移出元素节点，但是在此加入该元素事件还在 同级
Empty()清空节点下面的内容  下一级

复制
Clone() 复制节点 里面加true的情况下，将元素的所有事件属性也会复制过来

替换节点
Replacewith()讲一个元素节点换位另一个  replaceall()颠倒
包裹节点
Wrap()在一个节点的上一层包裹元素节点
Wrapall()在一大群节点上面包裹一个元素节点
Wrapinner()将一个节点的下一层包裹
DOM元素属性操作
Attr()获取属性，改变属性，添加属性 多个属性用对象括号
Css()无论外部css导入还是html直接的样式都可以获取
Height() witdth()分别可以获取选取元素的宽和高
innerHeight() innerWidth() 本身+padding
outHeight() outWidth() 本身+padding+border
Removeattr()删除属性

Addclass()增加样式 加多个
Removeclass()移出样式 移出多个
hasClass()判断某个元素有无某个样式
Toggle()隐藏或显示
toggleClass()切换样式
DOM元素获取操作
Html()获取选择器标签下的所有html片段 也可以给括号传入片段，用于插入片段
Text()获取某个元素节点的文本节点 也可以括号传入文本，用于插入文本
Val()获取input的value值 也可以设置value值
Children()获取选择器元素的所有儿子元素 父子
Next()获取选择器元素的下一个兄弟元素  兄弟
nextAll() 方法返回被选元素的所有跟随的同胞元素。
nextUntil() 方法返回介于两个给定参数之间的所有跟随的同胞元素。
prev()获取选择器元素的上一个兄弟元素  兄弟
prevAll() & prevUntil() 
Siblings()获取选择器元素的所有兄弟元素，同一父亲下的  兄弟
Closest()从元素本身开始，逐级向上匹配，返回最先匹配到的元素
Parent()获得父亲元素
Parents()获取所有祖先元素
First()选取选择器选择的第一个元素
Last()最后一个
Eq()第几个
Filter()选择器下面的该过滤器的元素
Not()去除选择器下的not下的元素

 */