import { curry } from '../../index';

const prop = curry((key, obj) => obj[key]);

export { prop };