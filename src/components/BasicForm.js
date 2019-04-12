import React from "react";

export default class BasicForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      errors: []
    };
  }
  handleSubmit = event => {
    event.preventDefault();
    // reset errors
    const errors = [];
    this.setState({ errors });

    // validation rules : name is required
    if (!this.state.name) {
      errors.push("Name is required");
    }

    // update state to display errors, and cancel submisson
    if (errors.length > 0) {
      this.setState({ errors });
      return;
    }

    // do something with form values here if all is okay
    // this.save(this.state)
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {/* display errors, if any */}
        {this.state.errors.length > 0 && (
          <ul className="errors">
            {this.state.errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        )}

        <input
          type="text"
          onChange={e => this.setState({ name: e.target.value })}
        />
        <input type="submit" value="save" />
      </form>
    );
  }
}
