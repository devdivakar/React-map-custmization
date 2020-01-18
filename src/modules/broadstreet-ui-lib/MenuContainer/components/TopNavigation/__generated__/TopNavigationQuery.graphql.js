/**
 * @flow
 * @relayHash c92e3f40c4fc6a1338a15708f55838a1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type TopNavigationQueryVariables = {||};
export type TopNavigationQueryResponse = {|
  +currentUser: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +jsonid: ?string,
        +username: ?string,
        +userFirstName: string,
      |}
    |}>
  |}
|};
export type TopNavigationQuery = {|
  variables: TopNavigationQueryVariables,
  response: TopNavigationQueryResponse,
|};
*/


/*
query TopNavigationQuery {
  currentUser {
    edges {
      node {
        jsonid
        username
        userFirstName
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "jsonid",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "username",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "userFirstName",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "TopNavigationQuery",
  "id": null,
  "text": "query TopNavigationQuery {\n  currentUser {\n    edges {\n      node {\n        jsonid\n        username\n        userFirstName\n        id\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TopNavigationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentUser",
        "storageKey": null,
        "args": null,
        "concreteType": "UserAccountNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserAccountNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "UserAccountNode",
                "plural": false,
                "selections": [
                  v0,
                  v1,
                  v2
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "TopNavigationQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "currentUser",
        "storageKey": null,
        "args": null,
        "concreteType": "UserAccountNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "UserAccountNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "UserAccountNode",
                "plural": false,
                "selections": [
                  v0,
                  v1,
                  v2,
                  {
                    "kind": "ScalarField",
                    "alias": null,
                    "name": "id",
                    "args": null,
                    "storageKey": null
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f5fb5f313e288907211c496fa5c5500';
module.exports = node;
