/**
 * @flow
 * @relayHash e4be362eaffef3d5c64699058c00f86e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type LoginUserInput = {
  username: string,
  userPassword: string,
  clientMutationId?: ?string,
};
export type TopNavigationMutationVariables = {|
  input: LoginUserInput
|};
export type TopNavigationMutationResponse = {|
  +loginUser: ?{|
    +userAccountNode: ?{|
      +id: string
    |},
    +validationErrors: ?$ReadOnlyArray<?{|
      +key: ?string,
      +message: ?string,
    |}>,
    +clientMutationId: ?string,
  |}
|};
export type TopNavigationMutation = {|
  variables: TopNavigationMutationVariables,
  response: TopNavigationMutationResponse,
|};
*/


/*
mutation TopNavigationMutation(
  $input: LoginUserInput!
) {
  loginUser(input: $input) {
    userAccountNode {
      id
    }
    validationErrors {
      key
      message
    }
    clientMutationId
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "LoginUserInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "loginUser",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input",
        "type": "LoginUserInput!"
      }
    ],
    "concreteType": "LoginUserPayload",
    "plural": false,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "userAccountNode",
        "storageKey": null,
        "args": null,
        "concreteType": "UserAccountNode",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "validationErrors",
        "storageKey": null,
        "args": null,
        "concreteType": "ValidationError",
        "plural": true,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "key",
            "args": null,
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "message",
            "args": null,
            "storageKey": null
          }
        ]
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "operationKind": "mutation",
  "name": "TopNavigationMutation",
  "id": null,
  "text": "mutation TopNavigationMutation(\n  $input: LoginUserInput!\n) {\n  loginUser(input: $input) {\n    userAccountNode {\n      id\n    }\n    validationErrors {\n      key\n      message\n    }\n    clientMutationId\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "TopNavigationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": v1
  },
  "operation": {
    "kind": "Operation",
    "name": "TopNavigationMutation",
    "argumentDefinitions": v0,
    "selections": v1
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'c77a01732a284809bed2eb3cdddfc488';
module.exports = node;
