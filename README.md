> js的数据类型有：Null Undefined Boolean Number Array String Object 之分，es6后又增加了Symbol，
其中分为2大类：基本数据类型和对象类型，同时产生了相应的2个传值方式：赋值和引用;


## 简单实现 JS的深拷贝 [deepCopy-simple.js](https://github.com/mishe/deepCopy/blob/master/deepCopy-simple.js)

> 有一个坑：那就是循环赋值问题没有解决

详见 [@155 JS深拷贝碰到的问题](https://github.com/mishe/blog/issues/155)

## 尝试解决循环赋值问题

引入一个数组，记录当前深度查询的所有object，设别是否有循环引用问题。

详细代码参考 [deepCopy-test1.js](https://github.com/mishe/deepCopy/blob/master/deepCopy-test1.js)

经过测试，完美的解决了循环引用的问题

!! 但发现没有完好的实现复制的功能，比如：obj1.k.c===obj2.k.c 因此，还需要解决引用问题。

## 最终方案 [deepCopy.js](https://github.com/mishe/deepCopy/blob/master/deepCopy.js)

 基本解决深拷贝问题，虽然不完美，但已经可以使用了.
 
 测试代码：
 ```
    var o1 = {a: 1}, o2 = {b: o1}, o3 = {c: o2};

    var obj1 = {
        a: 11,
        b: 'bb',
        c: new Date(),
        d: function aa() {
            return 2
        },
        e: [1, 2, 3],
        f: new Error('error'),
        g: document.body,
        h: new RegExp(/[111]/),
        i: o1,
        j: o2,
        k: o3,
        l: {a: o1}
    };

    obj1.m = obj1;
    obj1.n = {
        a: o1,
        b: {
            b: obj1.d,
            c: obj1.i,
            d: obj1.l
        }
    };
    o1.b = obj1;
    
    obj2 = deepCopy(obj1)
    console.log(obj1.a==obj2.a)
    console.log(obj1.h==obj2.h)
    console.log(obj1.i==obj2.i)
    console.log('obj1.i.b----'+(obj1.i.b==obj2.i.b));
    console.log(obj1.k==obj2.k)
    console.log(obj1.k.c==obj2.k.c)

 ```
