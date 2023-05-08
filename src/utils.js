export const sample = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export const range = (start, end, step = 1) => {
    let output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (let i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};

let lengthValidator = (minLength) => (value) => {
    if (value.length < minLength) {
        return true;
    }
    return false;
};

lengthValidator = lengthValidator(5);

export { lengthValidator };
