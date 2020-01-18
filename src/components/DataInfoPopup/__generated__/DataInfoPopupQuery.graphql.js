/**
 * @flow
 * @relayHash 15a70e181c05b228dedd45b0149ab3cc
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DataInfoPopupQueryVariables = {|
  input: string
|};
export type DataInfoPopupQueryResponse = {|
  +searchableIndicator: ?{|
    +dataInfoText: ?string
  |}
|};
export type DataInfoPopupQuery = {|
  variables: DataInfoPopupQueryVariables,
  response: DataInfoPopupQueryResponse,
|};
*/


/*
query DataInfoPopupQuery(
  $input: ID!
) {
  searchableIndicator(id: $input) {
    dataInfoText
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "input",
    "type": "ID!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dataInfoText",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "DataInfoPopupQuery",
  "id": null,
  "text": "query DataInfoPopupQuery(\n  $input: ID!\n) {\n  searchableIndicator(id: $input) {\n    dataInfoText\n    id\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "DataInfoPopupQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchableIndicator",
        "storageKey": null,
        "args": v1,
        "concreteType": "SearchableIndicatorNode",
        "plural": false,
        "selections": [
          v2
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DataInfoPopupQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchableIndicator",
        "storageKey": null,
        "args": v1,
        "concreteType": "SearchableIndicatorNode",
        "plural": false,
        "selections": [
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
};
})();
// prettier-ignore
(node/*: any*/).hash = 'de820bef067d4e83bdb5e3d522177d22';
module.exports = node;
