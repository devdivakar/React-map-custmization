/**
 * @flow
 * @relayHash 67ee4dc4400d9df15c26d5c84e52caf1
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LeftNavigationAQueryVariables = {||};
export type LeftNavigationAQueryResponse = {|
  +allSavedAreas: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
      |}
    |}>
  |}
|};
export type LeftNavigationAQuery = {|
  variables: LeftNavigationAQueryVariables,
  response: LeftNavigationAQueryResponse,
|};
*/


/*
query LeftNavigationAQuery {
  allSavedAreas(first: 3) {
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
    "name": "allSavedAreas",
    "storageKey": "allSavedAreas(first:3)",
    "args": [
      {
        "kind": "Literal",
        "name": "first",
        "value": 3,
        "type": "Int"
      }
    ],
    "concreteType": "SavedAreaNodeConnection",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "edges",
        "storageKey": null,
        "args": null,
        "concreteType": "SavedAreaNodeEdge",
        "plural": true,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "node",
            "storageKey": null,
            "args": null,
            "concreteType": "SavedAreaNode",
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
  "name": "LeftNavigationAQuery",
  "id": null,
  "text": "query LeftNavigationAQuery {\n  allSavedAreas(first: 3) {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LeftNavigationAQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v0
  },
  "operation": {
    "kind": "Operation",
    "name": "LeftNavigationAQuery",
    "argumentDefinitions": [],
    "selections": v0
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '6c0f8f1a5f2824ff7bd2c10a462b3974';
module.exports = node;
