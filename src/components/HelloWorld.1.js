import React from "react"

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      errors: [],
    }
  }

  handleInputChange = (event) => {
    const name = event.target.value;
    let errors = [];
    if (!name) {
      errors.push('le nom est requis')
    }
    this.setState({
      name: event.target.value,
      errors,
    });
  }

  render() {
    return (
      <div>
        <form>
          <h1>Hello {this.state.name}</h1>
          <h2>{this.state.errors.length > 0 && this.state.errors.join('. ')}</h2>
          <input onChange={this.handleInputChange} type="text" />
        </form>
      </div>
    )
  }
}
