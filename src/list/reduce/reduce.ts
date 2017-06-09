import { curry } from "../../index";

const reduce = curry((fn, start, monad) => {
    return monad.reduce ? monad.reduce(fn, start) : fn(monad);
});

export { reduce };