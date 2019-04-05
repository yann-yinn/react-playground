import React from "react"

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    }
  }
  render() {
    return (
      <div>
        <h1>Hello {this.state.name}</h1>
        <div>
          <input type="text" onChange={(e) => this.setState({ name: e.target.value })} />
        </div>
      </div>
    )
  }
}
