A GraphQL client written in typescript, consumable through decorators.

Usage:
```import {GQLprop} from 'decorated-graph';

class Myclass {

  @GQLprop({endpoint: 'http://server:8080/graphql'}) gql:any;

  async myMethod() {

    const query = '{a:{b c d}}';
    const result = await this.gql.query({query});
    
    //returns
    //{success:true, data: {a:{b:1, c:1, d:1}}
  }
}```

GQLprop
A property decorator is provided to instantiate the client.
