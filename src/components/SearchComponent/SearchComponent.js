// import React from 'react';
// import SearchIndicatorList from '../SearchIndicatorList/SearchIndicatorList'







// let indicatorsdatacommingfromAPI = [
//     {
//       name: "Leonard Rogers",
      
//     },
//     {
//       name: "Walker Pace",
      
//     },
//     {
//       name: "Lance Mcintyre",
     
//     },
//     {
//       name: "Rudyard Conway",
     
//     },
//     {
//       name: "Chadwick Oneal",
      
//     },
//     {
//       name: "Isaiah Kent",
      
//     },
//     {
//       name: "Griffith Perkins",
     
//     },
//     {
//       name: "Lawrence Wheeler",
     
//     },
//     {
//       name: "Preston Walker",
     
//     },
//     {
//       name: "Simon Brewer",
      
//     }
//   ];
  
// class SearchComponent extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         searchString: "",
//         indicatorsstate: []
//       };
// }
  
   
// handleSearch= (e) => {


//     if (e.key === 'Enter'){
//       this.setState({
//         searchString: this.refs.search.value
//       });
//       this.setState({
//         indicatorsstate: indicatorsdatacommingfromAPI
//       });
//       let indicators = this.state.indicatorsstate;
//       let searchString = this.state.searchString.trim().toLowerCase();
//       if (searchString.length > 0) {
//         indicators = indicators.filter(function(indicator) {
//           return indicator.name.toLowerCase().match(searchString);
         
//         });
//       }
//       return <SearchIndicatorList {...indicators}/>
//     }
// }

   
    
//     render() {
//      return (
//         <div>
//           <div>
//             <input
//               type="text"
//               value={this.state.searchString}
//               ref="search"
//               placeholder="Search for Indicators"
//               onKeyPress={(e) => {this.handleSearch(e)}}
//             />
            
//           </div>
//           {this.handleSearch}
//         </div>
//       );
//     }
//   }



//   export default SearchComponent;