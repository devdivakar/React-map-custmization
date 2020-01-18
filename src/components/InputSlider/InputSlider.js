import React from 'react';
import ReactDOM from 'react-dom';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import '../../css/mapstyle.css';

class InputSlider extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = { value: 1.0,
                    indicatorid:"" };

    }
    updateMapOpacity = (value) =>{
      this.setState( value )
   
      this.props.onMapLayerOpacityChanged(this.props.indicatorId, value.value)
      console.log("handleMapOpacitycalled" ,this.props.indicatorId,value.value)
      this.props.handleOpacity(value.value)
    }

    render() {
      return (
        <InputRange
          maxValue={1.0}
          step ={0.1}
          minValue={0.0}
          value={this.state.value}
          onChange={value => this.updateMapOpacity({ value })} />
      );
    }
  }

  export default InputSlider;