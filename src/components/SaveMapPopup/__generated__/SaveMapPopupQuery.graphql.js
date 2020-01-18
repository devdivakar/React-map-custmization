/**
 * @flow
 * @relayHash 2421c47607e0acc1f9fde3b299d8ce2f
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SaveMapPopupQueryVariables = {||};
export type SaveMapPopupQueryResponse = {|
  +myBoards: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +name: string,
        +sections: ?{|
          +edges: $ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +name: string,
            |}
          |}>
        |},
      |}
    |}>
  |}
|};
export type SaveMapPopupQuery = {|
  variables: SaveMapPopupQueryVariables,
  response: SaveMapPopupQueryResponse,
|};
*/


/*
query SaveMapPopupQuery {
  myBoards {
    edges {
      node {
        id
        name
        sections {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v2 = [
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
              v0,
              v1,
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "sections",
                "storageKey": null,
                "args": null,
                "concreteType": "BoardSectionNodeConnection",
                "plural": false,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "edges",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "BoardSectionNodeEdge",
                    "plural": true,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "node",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "BoardSectionNode",
                        "plural": false,
                        "selections": [
                          v0,
                          v1
                        ]
                      }
                    ]
                  }
                ]
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
  "name": "SaveMapPopupQuery",
  "id": null,
  "text": "query SaveMapPopupQuery {\n  myBoards {\n    edges {\n      node {\n        id\n        name\n        sections {\n          edges {\n            node {\n              id\n              name\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SaveMapPopupQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": v2
  },
  "operation": {
    "kind": "Operation",
    "name": "SaveMapPopupQuery",
    "argumentDefinitions": [],
    "selections": v2
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0ed6b4d21fc7ecc683d7278e557df81e';
module.exports = node;
