import React from "react";
import axios from "axios";
import { View, Text } from "react-native";

export default class Tester extends React.Component {
  loadDataFromServer() {
    // Pull data from the web and inject it into the panel
    axios
      .get("https://facebook.github.io/react-native/movies.json")
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson.movies);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  }

  render() {
    return (
      <View>
        <Text>This is the tester</Text>
      </View>
    );
  }
}
