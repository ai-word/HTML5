/*
在使用d3.js画图的过程中，碰到了csv格式的数据，便于查看，就想转成json格式的数据结构，在网上查阅了下，可以使用如下方法转换：
1、在线转：http://togeojson.com/ （特定格式csv）；
2、通过d3.js中的api去转：
考虑如下表示层级结构的数据结构:

Name	Parent
Eve
Cain	Eve
Seth	Eve
Enos	Seth
Noam	Seth
Abel	Eve
Awan	Eve
Enoch	Awan
Azura	Eve
上述数据格式可以方便的存储在CSV文件中:

name,parent
Eve,
Cain,Eve
Seth,Eve
Enos,Seth
Noam,Seth
Abel,Eve
Awan,Eve
Enoch,Awan
Azura,Eve
然后使用d3.csvParse转成json格式的csv数据:

var table = d3.csvParse(text);
返回:

[
  {"name": "Eve",   "parent": ""},
  {"name": "Cain",  "parent": "Eve"},
  {"name": "Seth",  "parent": "Eve"},
  {"name": "Enos",  "parent": "Seth"},
  {"name": "Noam",  "parent": "Seth"},
  {"name": "Abel",  "parent": "Eve"},
  {"name": "Awan",  "parent": "Eve"},
  {"name": "Enoch", "parent": "Awan"},
  {"name": "Azura", "parent": "Eve"}
]





*/
