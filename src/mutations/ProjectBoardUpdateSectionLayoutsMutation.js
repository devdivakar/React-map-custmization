import {
  commitMutation,
  graphql,
} from 'react-relay';
import environment from '../RelayEnvironment';

const mutation = graphql`
    mutation  
        ProjectBoardUpdateSectionLayoutsMutation($input:UpdateBoardSectionLayoutsInput!)  
        {  updateBoardSectionLayouts(input:$input)  
            {  updatesApplied 
            }  
        }
    `;

export default (layouts, callback) => {
    const variables = {
        "input": { "layouts": layouts }
        };

    //console.log(sectionLayoutMutation);
    commitMutation(
        environment,
        {
          mutation,
          variables,
          onCompleted: (response, errors) => {
            console.log('Response from server section layouts update.',JSON.stringify(response))
            callback()
          },
          onError: (err) => console.error(JSON.stringify(err)),
        },
    );
}