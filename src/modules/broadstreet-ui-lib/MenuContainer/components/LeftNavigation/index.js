import React, {Component} from 'react'
import {graphql, QueryRenderer, commitMutation} from 'react-relay'
import environment from '../../../../../RelayEnvironment'

const mutation = graphql`
  mutation  
  LeftNavigationMutation($input:  CreateBoardInput!)  
  {  createBoard(input:  $input)  
    {  boardNode  
      {  
        id            
        name 
      }  
    }  
  }
`

export default class extends Component {
  constructor(props){
    super(props)
    this.state = {
      isUpdateBoards : false
    }
  }
  handleBoadSelection = (id) => {
    this.props.handleBoardSelection(id)
  }
  onCreatingNewBoard = () => {
    const variables = 
      {"input":  {"name":  "Untitled Collection"}}
      
      commitMutation(
          environment,
          {
            mutation,
            variables,
            onCompleted: (response, errors) => {
              //console.log('Response from server section update.',JSON.stringify(response))
              this.setState({
                isUpdateBoards : this.state.isUpdateBoards === true ? false : true
              })
            },
            onError: (err) => console.error(JSON.stringify(err)),
          },
      );

  }

  render() {
    if(this.props.isMenuOpen)
    {
      return (
      <div className="bsui-leftnavmenu-open">
        {/* <h2>Left Navigation</h2> */}
        <ul>
          <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-1"></span> What’s New</a></li>
          <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-2"></span>My Favourites</a></li>
          
           
            <QueryRenderer
                        environment={environment}
                        query={graphql`
                        query  LeftNavigationQuery  
                        {  myBoards  
                          {                 
                             edges  
                             {                          
                               node  
                               {  
                                 id                                
                                 name                          
                                }                  
                              }  
                            }  
                          }
                       `}
                    variables={{isUpdateBoards : this.state.isUpdateBoards}}
                        render={({error, props}) => {
                        if (error) {
                            console.error(error);
                            return <div>Error!</div>;
                        }
                        if (!props) {
                            return <div></div>;
                        }
                       // console.error("My boards response from server" , JSON.stringify(props));
                       return <div>
                      <li className="left-menu sub-menu-list-wrap current-list"><a href="javascript:void(0);"><span className="left-icon-3 icon-right-arrow"></span>My Collection</a>
                        <ul className="left-sub-menu">
                       {
                           props.myBoards.edges.map((item , index) => {
                               return(
                                <li key={index} className="left-menu" onClick={() => this.handleBoadSelection(item.node.id)}><a href="javascript:void(0);"><span className="left-icon-4"></span>{item.node.name}</a></li>
                               )
                           })
                       }
                        <li className="left-menu" onClick={this.onCreatingNewBoard}><a href="javascript:void(0);"><span className="left-icon-5"></span>Create New Board</a></li>
                        </ul> 
                        </li>
                      </div>
                        }}
                 />
              
          
          <li className="left-menu sub-menu-list-wrap"><a href="javascript:void(0);"><span className="left-icon-6 icon-right-arrow"></span>Channels</a>
              <ul className="left-sub-menu">
                    <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-7"></span>Economy</a></li>
                    <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-8"></span>Education</a></li>
                    <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-9"></span>Environment</a></li>
                    <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-10"></span>Equity</a></li>
                    <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-11"></span>Food</a></li>
                    <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-12"></span>Health</a></li>
              </ul> 
          </li>
          <li className="left-menu sub-menu-list-wrap"><a href="javascript:void(0);" className="sub-menu-hd"><span className="left-icon-22 icon-right-arrow"></span>My Tags</a>
          <ul className="left-sub-menu">
         
            <QueryRenderer
                        environment={environment}
                        query={graphql`
                        query  LeftNavigationAQuery  
                        {  allSavedAreas(first:3)  
                          {  edges  
                            {              
                              node  
                              {  id                
                                name              
                              }  
                            }  
                          }  
                        }
                       `}
                        variables={{first : 3}}
                        render={({error, props}) => {
                        if (error) {
                            console.error(error);
                            return <div>Error!</div>;
                        }
                        if (!props) {
                            return <div></div>;
                        }
                         //console.error("list of areas" , JSON.stringify(props));
                        if (props.allSavedAreas === null) {
                          return <div></div>;
                        }
                       return <div>
                        <li className="left-menu sub-menu-list-wrap sub-menu-arrow-icon"><a href="javascript:void(0);"><span className="left-icon-13 icon-right-arrow"></span>Areas</a>
                        <ul className="left-sub-menu">
                       {  
                            props.allSavedAreas.edges.map((item , index) => {
                              return(
                               <li key={index} className="left-menu"><a href="javascript:void(0);"><span className="left-icon-14"></span>{item.node.name}</a></li>
                              )
                          }) 
                       }
                         </ul>      
                         </li>
                       </div>
                      }}
                 />
              {/* <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-14"></span>Detroit, MI</a></li>
              <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-15"></span>Indianapolis,IN</a></li>
              <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-16"></span>Rochelle,IL</a></li>         */}
           
          
          <li className="left-menu sub-menu-list-wrap sub-menu-arrow-icon"><a href="javascript:void(0);"><span className="left-icon-8 icon-right-arrow"></span>Hashtags</a>
             
                {/* <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-17"></span>Memorial Luteran Hosp..</a></li>
                <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-18"></span>#data</a></li>
                <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-19"></span>#chna</a></li> */}
                <QueryRenderer
                        environment={environment}
                        query={graphql`
                        query  LeftNavigationBQuery  
                        {  myHashtags(first:3)   
                            {  edges  
                                {              
                                    node  
                                    {   
                                        id                
                                        name                  
                                        permaTag            
                                    }  
                                }  
                            }  
                        }
                    `}
                        render={({error, props}) => {
                        if (error) {
                            console.error(error);
                            return <div>Error!</div>;
                        }
                        if (!props){
                            return <div></div>;
                        }
                        //console.error("list of hash tag" , JSON.stringify(props));
                        return<ul className="left-sub-menu">
                        {
                          props.myHashtags.edges.map((item , index) => {
                            return <li key={item.node.id} className="left-menu"><a href="javascript:void(0);"><span className="left-icon-17"></span>#{item.node.name}</a></li>
                          })
                        }
                        </ul> 
                        }}
                 />
              
          </li>
          </ul>
          </li>
          <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-20"></span>Compost Bin</a></li>
          <li className="left-menu"><a href="javascript:void(0);"><span className="left-icon-21"></span>Account Settings</a></li>
        </ul>
      </div>);
    }
    return <div className="bsui-leftnavmenu-closed"></div>
  }
}
