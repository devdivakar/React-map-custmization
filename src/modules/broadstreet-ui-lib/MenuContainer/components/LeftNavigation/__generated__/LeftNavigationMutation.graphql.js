/**
 * @flow
 * @relayHash 521dd96091f9bb1f661be21c77a1cc53
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateBoardInput = {
  name: string,
  clientMutationId?: ?string,
};
export type LeftNavigationMutationVariables = {|
  input: CreateBoardInput
|};
export type LeftNavigationMutationResponse = {|
  +createBoard: ?{|
    +boardNode: ?{|
      +id: string,
      +name: string,
    |}
  |}
|};
export type LeftNavigationMutation = {|
  variables: LeftNavigationMutationVariables,
  response: LeftNavigationMutationResponse,
|};
*/


/*
mutation LeftNavigationMutation(
  $input: CreateBoardInput!
) {
  createBoard(input: $input) {
    boardNode {
      id
      name
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateBoardInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createBoard",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "CreateBoardInput!"
      }
    ],
    "concreteType": "CreateBoardPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "boardNode",
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
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "LeftNavigationMutation",
  "id": null,
  "text": "mutation LeftNavigationMutation(\n  $input: CreateBoardInput!\n) {\n  createBoard(input: $input) {\n    boardNode {\n      id\n      name\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "LeftNavigationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "LeftNavigationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'ed2d94b0cb3556d7bdf9890b33e11767';
module.exports = node;
