import request from 'request-promise';
import {EventEmitter} from 'events';

interface IGQL {
    endpoint: string
}

interface Iquery {
    query: String
};

interface IqueryResponse {
    success: boolean,
    errored?: boolean,
    message?: string,
    data?: object
};

export class GQL extends EventEmitter {

    endpoint = '';

    constructor({endpoint}:IGQL) {

        super();
        this.endpoint = endpoint;
    }

    async query({query}:Iquery): Promise<IqueryResponse> {

        try {

            const response = await request({
                uri: this.endpoint,
                method: 'post',
                json: true,
                body: { query }
            });

            return Object.assign(response, {success:true});

        } catch( err ) {

            return this.handle_error('query', err);
        }
    }

    handle_error( method: string, err: Error, kill?: boolean ): IqueryResponse {

        return {success: false, errored: true, message: 'Internal Server error'};
    }

}