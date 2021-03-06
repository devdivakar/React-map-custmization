/**
 * @flow
 * @relayHash 53e87c340221c4cdb983cbe48c5c856b
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type IndicatorSearchInput = {
  anyOfThese?: ?string,
  excludeIf?: ?string,
  datasets?: ?$ReadOnlyArray<?string>,
  geographicUnitsAvailable?: ?$ReadOnlyArray<?string>,
  searchText?: ?string,
  startYear?: ?number,
  endYear?: ?number,
};
export type SelectIndicatorAQueryVariables = {|
  input: IndicatorSearchInput
|};
export type SelectIndicatorAQueryResponse = {|
  +searchIndicators: ?{|
    +edges: $ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +indicatorName: string,
        +uniqueVariableName: string,
        +year: number,
        +geographicUnit: {|
          +name: string
        |},
      |}
    |}>
  |}
|};
export type SelectIndicatorAQuery = {|
  variables: SelectIndicatorAQueryVariables,
  response: SelectIndicatorAQueryResponse,
|};
*/


/*
query SelectIndicatorAQuery(
  $input: IndicatorSearchInput!
) {
  searchIndicators(search: $input) {
    edges {
      node {
        id
        indicatorName
        uniqueVariableName
        year
        geographicUnit {
          name
          id
        }
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "IndicatorSearchInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "search",
    "variableName": "input",
    "type": "IndicatorSearchInput!"
  }
],
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "indicatorName",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "uniqueVariableName",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "year",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "SelectIndicatorAQuery",
  "id": null,
  "text": "query SelectIndicatorAQuery(\n  $input: IndicatorSearchInput!\n) {\n  searchIndicators(search: $input) {\n    edges {\n      node {\n        id\n        indicatorName\n        uniqueVariableName\n        year\n        geographicUnit {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SelectIndicatorAQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchIndicators",
        "storageKey": null,
        "args": v1,
        "concreteType": "SearchableIndicatorNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SearchableIndicatorNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "SearchableIndicatorNode",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "geographicUnit",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GeographicUnitNode",
                    "plural": false,
                    "selections": [
                      v6
                    ]
                  }
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
    "name": "SelectIndicatorAQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "searchIndicators",
        "storageKey": null,
        "args": v1,
        "concreteType": "SearchableIndicatorNodeConnection",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "edges",
            "storageKey": null,
            "args": null,
            "concreteType": "SearchableIndicatorNodeEdge",
            "plural": true,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "node",
                "storageKey": null,
                "args": null,
                "concreteType": "SearchableIndicatorNode",
                "plural": false,
                "selections": [
                  v2,
                  v3,
                  v4,
                  v5,
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "geographicUnit",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "GeographicUnitNode",
                    "plural": false,
                    "selections": [
                      v6,
                      v2
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
};
})();
// prettier-ignore
(node/*: any*/).hash = '1862a6ccba37efa7de63b1fe4fc844a5';
module.exports = node;
