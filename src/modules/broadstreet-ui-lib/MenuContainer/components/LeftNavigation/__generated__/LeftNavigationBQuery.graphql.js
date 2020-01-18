/**
 * @flow
 * @relayHash 0420a2cdd19477b6647d50162310c49a
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LeftNavigationBQueryVariables = {||};
export type LeftNavigationBQueryResponse = {|
  +myHashtags: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +permaTag: number,
      |}
    |}>
  |}
|};
export type LeftNavigationBQuery = {|
  variables: LeftNavigationBQueryVariables,
  response: LeftNavigationBQueryResponse,
|};
*/


/*
query LeftNavigationBQuery {
  myHashtags(first: 3) {
    edges {
      node {
        id
        name
        permaTag
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
    "name": "myHashtags",
    "storageKey": "myHashtags(first:3)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 3,
        "type": "Int"
      }
    ],
    "concreteType": "BoardTagNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "BoardTagNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "BoardTagNode",
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
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "permaTag",
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
  "name": "LeftNavigationBQuery",
  "id": null,
  "text": "query LeftNavigationBQuery {\n  myHashtags(first: 3) {\n    edges {\n      node {\n        id\n        name\n        permaTag\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LeftNavigationBQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "LeftNavigationBQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6f2b9c5f229e9c835763930d08c2163f';
module.exports = node;
