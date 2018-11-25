const config = require('../private/config');
import {GQLprop} from '../../src/decorators';

export class TestClass {

    @GQLprop({endpoint: config.endpoint}) gql:any;

    hasGQL():boolean{

        return Boolean(this.gql);
    }
}