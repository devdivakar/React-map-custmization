/**
 * @flow
 * @relayHash 49e9b1030a1a21291257a6e2194c8850
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateBoardSectionLayoutsInput = {
  layouts: any,
  clientMutationId?: ?string,
};
export type ProjectBoardUpdateSectionLayoutsMutationVariables = {|
  input: UpdateBoardSectionLayoutsInput
|};
export type ProjectBoardUpdateSectionLayoutsMutationResponse = {|
  +updateBoardSectionLayouts: ?{|
    +updatesApplied: ?number
  |}
|};
export type ProjectBoardUpdateSectionLayoutsMutation = {|
  variables: ProjectBoardUpdateSectionLayoutsMutationVariables,
  response: ProjectBoardUpdateSectionLayoutsMutationResponse,
|};
*/


/*
mutation ProjectBoardUpdateSectionLayoutsMutation(
  $input: UpdateBoardSectionLayoutsInput!
) {
  updateBoardSectionLayouts(input: $input) {
    updatesApplied
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "UpdateBoardSectionLayoutsInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateBoardSectionLayouts",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "UpdateBoardSectionLayoutsInput!"
      }
    ],
    "concreteType": "UpdateBoardSectionLayoutsPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "updatesApplied",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "ProjectBoardUpdateSectionLayoutsMutation",
  "id": null,
  "text": "mutation ProjectBoardUpdateSectionLayoutsMutation(\n  $input: UpdateBoardSectionLayoutsInput!\n) {\n  updateBoardSectionLayouts(input: $input) {\n    updatesApplied\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "ProjectBoardUpdateSectionLayoutsMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "ProjectBoardUpdateSectionLayoutsMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '44ddec81dcd489f0ef0c151de12b277c';
module.exports = node;
