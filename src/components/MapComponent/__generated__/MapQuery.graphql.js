/**
 * @flow
 * @relayHash 1e29b157c3e0b4badc08fd4a5a663cad
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type MapLayerInput = {
  indicators?: ?$ReadOnlyArray<?string>,
  northwest?: ?PointInput,
  southeast?: ?PointInput,
};
export type PointInput = {
  lng?: ?number,
  lat?: ?number,
};
export type MapQueryVariables = {|
  input: MapLayerInput
|};
export type MapQueryResponse = {|
  +indicatorMapLayer: ?{|
    +indicators: ?{|
      +edges: $ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +indicatorName: string,
          +year: number,
          +geographicUnit: {|
            +summaryLevelCode: string
          |},
          +dataDictionaryVariable: ?{|
            +baseMultiplier: ?number,
            +isLargerBetter: boolean,
            +showDecimalPlaces: ?number,
            +unitOfMeasure: ?string,
            +searchableindicatorSet: ?{|
              +edges: $ReadOnlyArray<?{|
                +node: ?{|
                  +id: string,
                  +geographicUnit: {|
                    +name: string,
                    +summaryLevelCode: string,
                  |},
                |}
              |}>
            |},
          |},
          +mapLegend: ?{|
            +edges: $ReadOnlyArray<?{|
              +node: ?{|
                +quantile: ?number,
                +legendText: ?string,
              |}
            |}>
          |},
        |}
      |}>
    |}
  |}
|};
export type MapQuery = {|
  variables: MapQueryVariables,
  response: MapQueryResponse,
|};
*/


/*
query MapQuery(
  $input: MapLayerInput!
) {
  indicatorMapLayer(layer: $input) {
    indicators {
      edges {
        node {
          id
          indicatorName
          year
          geographicUnit {
            summaryLevelCode
            id
          }
          dataDictionaryVariable {
            baseMultiplier
            isLargerBetter
            showDecimalPlaces
            unitOfMeasure
            searchableindicatorSet {
              edges {
                node {
                  id
                  geographicUnit {
                    name
                    summaryLevelCode
                    id
                  }
                }
              }
            }
            id
          }
          mapLegend {
            edges {
              node {
                quantile
                legendText
                id
              }
            }
          }
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
    "type": "MapLayerInput!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "layer",
    "variableName": "input",
    "type": "MapLayerInput!"
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
  "name": "year",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "summaryLevelCode",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "baseMultiplier",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "isLargerBetter",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "showDecimalPlaces",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "unitOfMeasure",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "quantile",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "legendText",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "operationKind": "query",
  "name": "MapQuery",
  "id": null,
  "text": "query MapQuery(\n  $input: MapLayerInput!\n) {\n  indicatorMapLayer(layer: $input) {\n    indicators {\n      edges {\n        node {\n          id\n          indicatorName\n          year\n          geographicUnit {\n            summaryLevelCode\n            id\n          }\n          dataDictionaryVariable {\n            baseMultiplier\n            isLargerBetter\n            showDecimalPlaces\n            unitOfMeasure\n            searchableindicatorSet {\n              edges {\n                node {\n                  id\n                  geographicUnit {\n                    name\n                    summaryLevelCode\n                    id\n                  }\n                }\n              }\n            }\n            id\n          }\n          mapLegend {\n            edges {\n              node {\n                quantile\n                legendText\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
  "metadata": {},
  "fragment": {
    "kind": "Fragment",
    "name": "MapQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "indicatorMapLayer",
        "storageKey": null,
        "args": v1,
        "concreteType": "MapLayerNode",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "indicators",
            "storageKey": null,
            "args": null,
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "geographicUnit",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "GeographicUnitNode",
                        "plural": false,
                        "selections": [
                          v5
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "dataDictionaryVariable",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DataDictionaryVariableNode",
                        "plural": false,
                        "selections": [
                          v6,
                          v7,
                          v8,
                          v9,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "searchableindicatorSet",
                            "storageKey": null,
                            "args": null,
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
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "geographicUnit",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "GeographicUnitNode",
                                        "plural": false,
                                        "selections": [
                                          v10,
                                          v5
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "mapLegend",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SearchableIndicatorMapLegendNodeConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SearchableIndicatorMapLegendNodeEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SearchableIndicatorMapLegendNode",
                                "plural": false,
                                "selections": [
                                  v11,
                                  v12
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
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MapQuery",
    "argumentDefinitions": v0,
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "indicatorMapLayer",
        "storageKey": null,
        "args": v1,
        "concreteType": "MapLayerNode",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "indicators",
            "storageKey": null,
            "args": null,
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
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "geographicUnit",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "GeographicUnitNode",
                        "plural": false,
                        "selections": [
                          v5,
                          v2
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "dataDictionaryVariable",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "DataDictionaryVariableNode",
                        "plural": false,
                        "selections": [
                          v6,
                          v7,
                          v8,
                          v9,
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "searchableindicatorSet",
                            "storageKey": null,
                            "args": null,
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
                                      {
                                        "kind": "LinkedField",
                                        "alias": null,
                                        "name": "geographicUnit",
                                        "storageKey": null,
                                        "args": null,
                                        "concreteType": "GeographicUnitNode",
                                        "plural": false,
                                        "selections": [
                                          v10,
                                          v5,
                                          v2
                                        ]
                                      }
                                    ]
                                  }
                                ]
                              }
                            ]
                          },
                          v2
                        ]
                      },
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "mapLegend",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "SearchableIndicatorMapLegendNodeConnection",
                        "plural": false,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "edges",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "SearchableIndicatorMapLegendNodeEdge",
                            "plural": true,
                            "selections": [
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "node",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "SearchableIndicatorMapLegendNode",
                                "plural": false,
                                "selections": [
                                  v11,
                                  v12,
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
            ]
          }
        ]
      }
    ]
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '74eefca54583756603474227bbb1d7d1';
module.exports = node;
