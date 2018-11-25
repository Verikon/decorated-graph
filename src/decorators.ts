import {GQL} from './GQL';

interface IwithGQL {
    endpoint: string,
    prop?: string,
    onConnect?(): object
};

let instance:any;

export function GQLprop({endpoint}:IwithGQL) {
    
    instance = instance || new GQL({endpoint});
    
    return function( target: any, key: any ) {

        const getter = () => instance;

        Object.defineProperty(target, key, {
            get: getter,
            enumerable: true,
            configurable: true
        })
    };

}