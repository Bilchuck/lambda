import { describe, it } from 'mocha';
import { expect } from 'chai';
import { compose, prop, curry, assoc } from "../index";

describe('Object functions: ', () => {
    it('prop should get prop from object', () => {
        const obj = {name: '123'};
        const getName = prop('name');
        expect(getName(obj)).to.be.equal('123');
    });
    it('assoc should set prop to object', () => {
        const obj = {age: 99};
        const incAge = assoc('age', 100);
        expect(incAge(obj)).to.have.property('age', 100);
        //.prop('age').to.be.equal(100);
    });
});