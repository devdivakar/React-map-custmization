import fetchWithRetries from 'fbjs/lib/fetchWithRetries';
import { fromGlobalId } from 'graphql-relay';

const fetchFunction = async(
  indicatorRelayId,
  tile_num
) => {
  const headers = {
    Accept: 'application/json',
    'Content-type': 'application/json',
    authorization: 'AIzaSyCbMEN223iJ2r-GhBcPHda0V7mo3vz1uRo',
  };

  const indicatorId = fromGlobalId(indicatorRelayId).id;
  const response = await fetchWithRetries('https://demo.broadstreet.io/bsdata/indicator/' + indicatorId + '/' + tile_num + '.json', {
    method: 'GET',
    credentials: 'include',
    headers,
    fetchTimeout: 20000,
//    retryDelays: [1000, 3000, 5000, 10000],
    retryDelays: [1000],
  });

  const data = await response.json();
  // TODO: make sure we return null on error here
  return data;
};

export default fetchFunction;