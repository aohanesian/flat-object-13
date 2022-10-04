function convert(object) {
    let newObj = {};
    for (let key in object) {
        if (typeof object[key] === `object`) {
            for (let keyInner in object[key]) {
                newObj[keyInner] = object[key][keyInner];
            }
        } else {
            newObj[key] = object[key];
        }
    }
    return newObj;
}

const obj = {
    x: 10,
    y: 20,
    inner: {
        x: 20,
        z: 30
    },
    foo2: {
        k: 23,
        p: 13
    }
};

console.log(convert(obj));

const phrase = {
    a: 'jack',
    b: {
        c: 'sparrow',
        d: {
            e: 'capitan',
            f: {
                g: `haha`
            }
        }
    }
};

console.log(convert(phrase))

function recursiveConvert(object) {
    let newObj = {};
    for (let key in object) {
        if (typeof object[key] !== `object`) {
            newObj[key] = object[key];
        } else {
            return Object.assign(newObj, recursiveConvert(object[key]));
        }
    }
    return newObj;
}

console.log(`try recursive`)
console.log(recursiveConvert(phrase))

