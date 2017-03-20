> js的数据类型有：Null Undefined Boolean Number Array String Object 之分，es6后又增加了Symbol，
其中分为2大类：基本数据类型和对象类型，同时产生了相应的2个传值方式：赋值和引用;


## 简单实现 JS的深拷贝 deepCopy-simple.js

> 有一个坑要：那就是循环赋值问题没有解决

详见 [@155 JS深拷贝碰到的问题](https://github.com/mishe/blog/issues/155)

## 尝试解决循环赋值问题

引入一个数组，记录当前深度查询的所有object，设别是否有循环引用问题。

