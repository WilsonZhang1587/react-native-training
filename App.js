/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { StyleSheet, Text, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Fetch from "./components/Fetch";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Test3 from "./components/Test3";

type Props = {};
export default class App extends Component<Props> {
  getUser = () => {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      err => {
        console.log(err);
      }
    );
  };

  render() {
    return (
      <ScrollView>
        <Text>Welcome to React Native!</Text>
        <Text>To get started, edit App.js</Text>
        <Fetch onGet={this.getUser} />
        <Test1 />
        <Test2 />
        <Test3 />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});
