var fs = require('fs');

var path='D:\\mycode\\thexo\\node_modules\\hexo\\lib\\plugins';


/*  递归查找,
 *      如果是文件 a12[label="filename",]
 *      如果是文件夹f12[]
 *
 *      f12 -- >{数组};
 *
 *  dfs
 *  */

var cnt =1;
var fileCnt =1;

var t1 =[];
var t2 =[];

//readR 读取路径,把文件存到fileArray,把路径存到pathFile
var readR = function(path,fileArray,pathFile){

    var arr = fs.readdirSync(path); // 路径下的所有文件;
    var i;
    for(i=0;i<arr.length;i++){
        if(fs.statSync(path+'\\'+arr[i]).isDirectory()){
            /* 如果是文件夹 */
            var tcnt = 'a'+(cnt++).toString(); //生成  文件夹ID
            pathFile.push(tcnt);   //把路径存到pathFile
            var tmparray1 = [];
            var tmparray2 = [];
            readR(path+'\\'+arr[i],tmparray1,tmparray2);
            console.log(tcnt+'[label="'+arr[i]+'"' + "shape=box,fillcolor=white"+']');

            var str = tcnt+'->{';
            var j;
            for(j=0;j<tmparray.length-1;j++){
                str+=tmp[j]+',';
            }

            str+=tmp[tmp.length-1] +'};';
            console.log(str);
            for(j=0;j<tmparray2.length;j++)
                console.log(tcnt+'->'+tmparray2[j]+';');


        /* 如果是文件 */
        } else if(fs.statSync(path+'\\'+arr[i]).isFile()){
            var tfileCnt = 'F'+(fileCnt++).toString();
            console.log(tfileCnt+'[label="'+arr[i]+'"'+'shape=oval,fillcolor=lightyellow'+'];');
            tmp.push(tfileCnt);
        }
    }

}

readR(path,t1,t2);
