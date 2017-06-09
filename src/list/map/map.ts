import { curry } from "../../index";

const map = curry((fn, monad) => {
    return monad.map ? monad.map(fn) : fn(monad);
});

export { map };