import React from "react";

export class SimpleForm extends React.Component {
  state = {
    inputValue: ""
  };
  render() {
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(this.state.inputValue);
          this.props.onFormSubmit(this.state.inputValue);
        }}
      >
        <textarea
          value={this.state.inputValue}
          onChange={e => {
            this.setState({ inputValue: e.target.value });
            console.log(e.target.value);
          }}
        />
        <button>Submit</button>
      </form>
    );
  }
}
