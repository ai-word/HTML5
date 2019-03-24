for (var i = 0,a={},b=[]; i < 10; i++) {
    var r=parseInt(Math.random()*20)+1;
    (a[r]===undefined)?a[r]=1&&b.push(r):i--;
}
a=null;
console.log(b);