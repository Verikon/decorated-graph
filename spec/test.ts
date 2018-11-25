import {assert} from 'chai';
import {TestClass} from './mock/testclass';
import {GQL} from '../src/GQL';

import 'mocha';

interface APIResult {
    success: Boolean,
    data: Object|Array<Object>
};

const query1 = `{user{user pass}}`;

describe('build tests', () => {

    let tc:TestClass;

    it('Instantiates the TestClass', () => {

        tc = new TestClass();
        assert(tc instanceof TestClass, 'failed');
    });

    describe('Querying', () => {

        let result:APIResult;

        it('performs query 1', async () => {

            const query = query1;
            result = await tc.gql.query({query});
        });

        describe('Received the expected return', () => {

            it('Received the success flag', () => {

                assert(result.success === true, 'failed');
            });

            it('Received data', () => {

                assert(Boolean(result.data), 'failed');
            });

        });

    });

});