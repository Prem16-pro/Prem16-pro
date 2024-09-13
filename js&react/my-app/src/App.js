import { Component } from 'react';

class Faculty extends Component {
  state = {
    id: 0,
    job: 0,
    ctc: 0
  }

  handleIdChange = (e) => {
    const value = e.target.value;
    this.setState({
      id: isNaN(value) ? this.state.id : Number(value)

    });
  }

  handleJobChange = (e) => {
    const value = e.target.value;
    this.setState({
      job: isNaN(value) ? this.state.job : Number(value)

    });
  }
  handlectcChange = (e) => {
    this.setState({
      ctc: Number(this.state.id) + Number(this.state.job)
    });
  }
  render() {
    return (

      <>
        <input
          value={this.state.id}
          onChange={this.handleIdChange}
        />
        <input
          value={this.state.job}
          onChange={this.handleJobChange}
        />
        <button onClick={this.handlectcChange}>
          add
        </button>
        <p>Value of a: {this.state.id}, Value of b: {this.state.job} their addition is : {this.state.ctc}. </p>
      </>
    );



  }
}

function App() {
  return (
    <div>
      <Faculty />

    </div>
  );
}

export default App;
