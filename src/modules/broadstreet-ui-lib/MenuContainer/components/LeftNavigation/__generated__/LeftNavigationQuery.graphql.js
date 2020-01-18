/**
 * @flow
 * @relayHash 31a6c059d4f2f1b6bbf3b01c4c79a442
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LeftNavigationQueryVariables = {||};
export type LeftNavigationQueryResponse = {|
  +myBoards: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type LeftNavigationQuery = {|
  variables: LeftNavigationQueryVariables,
  response: LeftNavigationQueryResponse,
|};
*/


/*
query LeftNavigationQuery {
  myBoards {
    edges {
      node {
        id
        name
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "myBoards",
    "storageKey": null,
    "args": null,
    "concreteType": "BoardNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "BoardNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "BoardNode",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "LeftNavigationQuery",
  "id": null,
  "text": "query LeftNavigationQuery {\n  myBoards {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LeftNavigationQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "LeftNavigationQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'aa2c29b4aedd91085b7203d48ab3ffdd';
module.exports = node;
