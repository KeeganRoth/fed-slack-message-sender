import React, { Component } from "react";
import { SimpleForm } from "../components/SimpleForm";
import { sendSlackMessage } from "../service/Slack";

class MessagePage extends Component {
  state = {
    messagestatus: ""
  };

  handleSubmit = text => {
    // console.log("text", text);
    // sendSlackMessage(text => {
    //   this.setState(messagestatus);
    // });
    sendSlackMessage(text).then(response =>
      this.setState({ messagestatus: response })
    );
  };

  render() {
    return (
      <main>
        <h1 />
        <SimpleForm onFormSubmit={this.handleSubmit} />
        <p>{this.state.messagestatus}</p>
      </main>
    );
  }
}
export default MessagePage;
