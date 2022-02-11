const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0);

const findMin = (...args) => Math.min(...args);

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(num => num * 2)];

const removeRandom = item => {
    let index = Math.floor(Math.random() * item.length);
    return [...item.slice(0, index), ...item.slice(index + 1)];
};

const extend = (arr1, arr2) => {
    return [...arr1, ...arr2];
};

const addKeyVal = (obj, key, val) => {
    let newObj = { ...obj }
    nowObj[key] = val;
    return newObj;
};

const removeKey = (obj, key) => {
    let newObj = { ...obj }
    delete newObj[key]
    return newObj;
};

const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};

const update = (obj, key, val) => {
    let newObj = { ...obj }
    newObj[key] = val;
    return newObj;
};