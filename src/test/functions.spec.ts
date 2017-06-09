import { describe, it } from 'mocha';
import { expect } from 'chai';
import { compose } from "../index";

describe('Function functions: ', () => {
    it('Compose should call functions from last to first', () => {
        const test = compose(
            v => v ? 'success' : 'fail',
            v => true
        );
        expect(test(false)).to.be.equal('success');
    })
});