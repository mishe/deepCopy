function deepCopy (obj) {
    var type = Object.prototype.toString.call(obj).split(/[\[\s\]]/)[2];
    let temp = type === 'Array' ? [] : type=='Object'? {}:obj;
    if(type=='Array' || type=='Object'){
        for (let val in obj) {
            temp[val] = typeof obj[val] == 'object' ? deepCopy(obj[val]) : obj[val]
        }
    }
    return temp
}
