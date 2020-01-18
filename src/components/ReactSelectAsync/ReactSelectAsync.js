import React, { Component } from 'react';
import '../../css/mapstyle.css';
import AsyncSelect,  { components } from 'react-select';

const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', disabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' },
];



class Demo1 extends Component {
  constructor(props){
    super(props)
  }

called = () => {
    console.log("called")
}


render(){
     return(
       <div>
         <Demo check = {this.called} />
       </div>
     )
   }
 }



class Demo extends Component {
 constructor(props){
   super(props)
  console.log("getting props in demo , ", props)
  }
  render(){
    return(
      <div></div>
    )
  }
}


const CustomOption = ({ innerRef, innerProps, props }) => (

  
  <div className="select-area-drpdwn" ref={innerRef} {...innerProps}{...props} >
        <div className="serch-for-prof-list">
            <div className="srch-map-prof">
              <img src= {require("../../images/user1.png")} alt="" />

            </div>
            <div className="srch-map-detail">
                <h4>Detroit, MI</h4>
                <span>My Areas</span>
            </div>
        </div>
  </div>
  )

type State = {
  inputValue: string,
};

const filterColors = (inputValue: string) =>
  colourOptions.filter(i =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );

const loadOptions = (inputValue, callback) => {
  setTimeout(() => {
    callback(filterColors(inputValue));
  }, 1000);
};

export default class WithCallbacks extends Component<*, State> {
  state = { inputValue: '' };
  handleInputChange = (newValue: string) => {
    // console.log(newValue)
    const inputValue = newValue.replace(/\W/g, '');
    this.setState({ inputValue });
    
    return inputValue;
    
  };

  onChange = (value) => {
    // console.log("value on change---> ", value)
    this.props.handlemaplayers(value)
  }
  render() {
 
    return(
      
      <div className="search-card-section">
        <AsyncSelect
          cacheOptions
          loadOptions={loadOptions}
          options={colourOptions}
          onInputChange={this.handleInputChange}
          onChange={this.onChange}
          components={{Option: CustomOption}}
        >
        </AsyncSelect>
      </div>
    );
  }
}
