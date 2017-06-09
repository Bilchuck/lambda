const curry = (fn): Function => {
    const argLength = fn.length;
    return (function loop(...args) {
        const memory = [...args];
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