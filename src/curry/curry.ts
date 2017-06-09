const curry = (fn) => {
    const argLength = fn.length;
    return (function loop() {
        const memory = [...arguments];
        return function() {
            const args = [...memory, ...arguments]
            const next = args.length < argLength 
                ? loop
                : fn;
            return next.apply(null, args);
        }
    })();
}

export { curry };