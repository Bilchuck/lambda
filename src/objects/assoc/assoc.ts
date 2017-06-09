import { curry } from '../../index';

const assoc = curry((key, value, obj) => ({
    ...obj,
    [key]: value
}));

export { assoc };