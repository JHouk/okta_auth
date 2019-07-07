import React from "react";
import axios from "axios";
import { AppRegistry, View, Text } from "react-native";
import { name as appName } from "../app.json";

export default class Tester extends React.Component {
  constructor(props) {
    super(props);
    this.state = { content: "Click to call server" };
  }

  loadDataFromServer = () => {
    this.setState({ content: "Calling server..." });
    // Pull data from the web and inject it into the panel
    axios
      .get("https://facebook.github.io/react-native/movies.json")
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

AppRegistry.registerComponent(appName, () => Tester);
