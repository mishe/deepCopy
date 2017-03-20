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


    var deepCopyArray = [],
        typeReg = /[\[\s\]]/,
        typeObj = Object.prototype.toString;
    function deepCopy(obj) {
        deepCopyArray=[];
        return deepCopyFn(obj);
    }

    function deepCopyFn(obj){
        var type = typeObj.call(obj).split(typeReg)[2];
        var temp = type === 'Array' ? [] : type == 'Object' ? {} : obj;
        var pos = false;
        if (type == 'Array' || type == 'Object') {
            if (type == 'Object') {
                for (let i = 0; i < deepCopyArray.length; i++) {
                    if (deepCopyArray[i] == obj) {
                        temp = obj;
                        pos = true;
                        break;
                    }
                }
                if (!pos) {
                    deepCopyArray.push(obj);
                    temp = copyObject(obj);
                }
            } else {
                temp = copyObject(obj)
            }
        }
        return temp
    }


    function copyObject(obj) {
        var type1 = typeObj.call(obj).split(typeReg)[2];
        var temp = type1 === 'Array' ? [] : type1 == 'Object' ? {} : obj;
        for (let val in obj) {
            let value = obj[val]
            let type2 = typeObj.call(value).split(typeReg)[2];
            if (type2 == 'Array' || type2 == 'Object') {
                temp[val] = deepCopyFn(value)
            } else {
                temp[val] = value;
            }
        }
        return temp;
    }

    obj2 = deepCopy(obj1)
