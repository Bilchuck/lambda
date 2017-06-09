const compose = (...composition) => {
    composition = composition.reverse();
    return (x) => composition.reduce((result, fn) => {
        return fn(result);
    }, x);
}

export { compose };