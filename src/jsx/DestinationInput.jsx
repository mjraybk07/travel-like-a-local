import React from 'react';
import styled from 'styled-components'
import TextField from 'material-ui/TextField';

class DestinationInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputDest: ""
    }
    this.handleDestInputChange = this.handleDestInputChange.bind(this)
    this.handleInputDestClick = this.handleInputDestClick.bind(this)
  }

  handleDestInputChange(e){
    this.setState({
      inputDest: e.target.value
    })
  }

  handleInputDestClick(e){
    e.preventDefault();
    this.props.handleInputDest(this.state.inputDest);
    this.setState({
      inputDest: ""
    });
  }


  render() {
    return(
      <StyledDestinationInput>
        <TextField
          hintText="Add Your City to our Database!"
          value={this.state.inputDest} onChange={this.handleDestInputChange}
        />
        {/* <input placeholder="Add Your City to our Database!" type="text" value={this.state.inputDest} onChange={this.handleDestInputChange}/> */}
        <input type="submit" value="Submit" onClick={this.handleInputDestClick} />
      </StyledDestinationInput>
    );
  }
}

const StyledDestinationInput = styled.div`
  margin: 10px 0px;
  margin-top: 25px;
`

export default DestinationInput;