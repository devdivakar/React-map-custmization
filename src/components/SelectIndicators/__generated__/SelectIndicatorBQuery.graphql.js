/**
 * @flow
 * @relayHash af2bd25017e42e19eaa489b82ee514c3
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
export type SelectIndicatorBQueryVariables = {|
  input: IndicatorSearchInput
|};
export type SelectIndicatorBQueryResponse = {|
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
export type SelectIndicatorBQuery = {|
  variables: SelectIndicatorBQueryVariables,
  response: SelectIndicatorBQueryResponse,
|};
*/


/*
query SelectIndicatorBQuery(
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
  "name": "SelectIndicatorBQuery",
  "id": null,
  "text": "query SelectIndicatorBQuery(\n  $input: IndicatorSearchInput!\n) {\n  searchIndicators(search: $input) {\n    edges {\n      node {\n        id\n        indicatorName\n        uniqueVariableName\n        year\n        geographicUnit {\n          name\n          id\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "SelectIndicatorBQuery",
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
    "name": "SelectIndicatorBQuery",
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
(node/*: any*/).hash = 'fcd603e7828cd597e55327512d5b6d7e';
module.exports = node;
