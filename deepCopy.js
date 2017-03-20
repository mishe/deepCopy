    var deepCopyArray = [],
        deepType={
            Array:[],
            Object:{}
        },
        deepTypeValue={
            Array:true,
            Object:true
        };

    function getType(obj){
        return Object.prototype.toString.call(obj).split(/[\[\s\]]/)[2];
    }

    function deepCopy(obj) {
        let type =getType(obj);
        let data = type === 'Array' ? [] : type=='Object'? {}:obj;

        if(deepType[type]){
            for (let val in obj) {
                let value=obj[val];
                let subType=getType(value);
                if(deepType[subType]) {
                    deepCopyArray = [];
                    deepCopyArray.push(obj);
                    deepCopyArray.push(value);
                    data[val] = deepCopyFn(value)
                }else{
                    data[val]=value;
                }
            }
        }
        return data
    }



    function deepCopyFn(obj){
        let type =getType(obj);
        let data = type === 'Array' ? [] : type=='Object'? {}:obj;

        if(deepType[type]){
            for (let val in obj) {
                let value=obj[val];
                let subType=getType(value);
                let flag=false;
                if(deepType[subType]) {
                    for (let i = 0; i < deepCopyArray.length; i++) {
                        if (deepCopyArray[i] === value) {
                            flag = true;
                            break;
                        }
                    }
                    if (!flag) {
                        deepCopyArray.push(value);
                        data[val] = deepCopyFn(value);
                    }else{
                        data[val]=value;
                    }
                }else{
                    data[val]=value;
                }
            }
        }
        return data
    }
