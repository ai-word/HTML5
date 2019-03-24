// js数组依据下标删除元素

// 1、创建数组
var array = new Array();
var array = new Array(size);//指定数组的长度
var array = new Array(item1,item2……itemN);//创建数组并赋值

// 2、取值、赋值
var item = array[index];//获取指定元素的值
array[index] = value;//为指定元素赋值

// 3、添加新元素
array.push(item1,item2……itemN);//将一个或多个元素加入数组，返回新数组的长度
array.unshift(item1,item2……itemN);//将一个或多个元素加入到数组的开始位置，原有元素位置自动后移，返回  新数组的长度
array.splice(start,delCount,item1,item2……itemN);//从start的位置开始向后删除delCount个元素，然后从start的位置开始插入一个或多个新元素

// 4、删除元素
array.pop();//删除最后一个元素，并返回该元素
array.shift();//删除第一个元素，数组元素位置自动前移，返回被删除的元素
array.splice(start,delCount);//从start的位置开始向后删除delCount个元素

// 5、数组的合并、截取
array.slice(start,end);//以数组的形式返回数组的一部分，注意不包括 end 对应的元素，如果省略 end 将复制 start 之后的所有元素
array.concat(array1,array2);//将多个数组拼接成一个数组

// 6、数组的排序
array.reverse();//数组反转
array.sort();//数组排序，返回数组地址

// 7、数组转字符串
array.join(separator);//将数组原因用separator连接起来

// 列了这么都就是没有发现删除数组元素的方法！于是查了一些资料找到了解决方法。
// 删除数组元素需要扩展Array原型prototype.

Array.prototype.del=function(index){
  if(isNaN(index)||index>=this.length){
    return false;
  }
  for(var i=0,n=0;i++){
    if(this[i]!=this[index]){
      this[n++]=this[i];
    }
  }
  this.length-=1;
};