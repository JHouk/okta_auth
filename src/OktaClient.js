import React from "react";
import axios from "axios";
import { AppRegistry, View, Text } from "react-native";
import { name as appName } from "../app.json";

const AUTH_ENDPOINT = "/api/v1/authn";

export default class OktaClient extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: `Click to authenticate with ${props.user}` };
  }

  loadDataFromServer = () => {
    this.setState({ content: "Calling server..." });
    // Pull data from the web and inject it into the panel
    axios
      .post(`https://${this.props.server}${AUTH_ENDPOINT}`, {
        username: this.props.user,
        password: this.props.password
      })
      .then(response => {
        this.setState({ content: JSON.stringify(response.data) });
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <Text onPress={this.loadDataFromServer}>{this.state.content}</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent(appName, () => OktaClient);
