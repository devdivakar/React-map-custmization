import {
    Environment,
    Network,
    RecordSource,
    Store,
  } from 'relay-runtime';
  import fetchWithRetries from 'fbjs/lib/fetchWithRetries';
  import  { RequestNode, Variables /*, CacheConfig, UploadableMap */} from 'relay-runtime';
  
  const isMutation = (request: RequestNode) => request.operationKind === 'mutation';
  
  const fetchFunction = async(
    request: RequestNode,
    variables: Variables
    /*,
    cacheConfig: CacheConfig,
    uploadables: ?UploadableMap,*/
  ) => {
    const body = JSON.stringify({
      query: request.text, // GraphQL text from input
      variables,
    });
  
    const headers = {
      Accept: 'application/json',
      'Content-type': 'application/json',
      authorization: 'AIzaSyCbMEN223iJ2r-GhBcPHda0V7mo3vz1uRo',
    };
  
    const response = await fetchWithRetries('https://demo.broadstreet.io/graphql', {
      method: 'POST',
      credentials: 'include',
      headers,
      body,
      fetchTimeout: 20000,
  //    retryDelays: [1000, 3000, 5000, 10000],
      retryDelays: [1000],
    });
  
    const data = await response.json();
  
    if (isMutation(request) && data.errors) {
      throw data;
    }
  
    return data;
  };
  const environment = new Environment({
    network: Network.create(fetchFunction),
    store: new Store(new RecordSource()),  
  });
  
  export default environment;