import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  Switch
} from "react-native";

export default class Test1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Wilson",
      showName: true,
      message: this.props.message,
      textValue: "Hello",
      switchValue: false
    };
  }
  static defaultProps = {
    message: "default message"
  };

  onPress = () => {
    console.log("22222");
  };
  onPress2 = () => {
    console.log("11111");
  };

  onChangeText = value => {
    this.setState({ textValue: value });
  };
  onSubmit = () => {
    console.log("send");
  };
  onSwitchChange = value => {
    this.setState({
      switchValue: value
    });
  };

  render() {
    const { name, showName, message, textValue, switchValue } = this.state;
    let meName = showName ? name : "No name";
    return (
      <View>
        <View style={styles.myView}>
          <Text style={styles.mtText1}>{message}</Text>
          <Text style={styles.mtText2}>{meName}</Text>
        </View>
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.v1}
            onPress={this.onPress}
            underlayColor="blue"
          >
            <View>
              <Text>View 1</Text>
            </View>
          </TouchableHighlight>
          <TouchableOpacity style={styles.v2} onPress={this.onPress2}>
            <View>
              <Text>View 2</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.v3}>
            <Text>View 3</Text>
          </View>
        </View>
        {/* ------------------------------------------------------------ */}
        <View>
          <TextInput
            placeholder="Enter Text"
            value={textValue}
            onChangeText={value => this.onChangeText(value)}
            onSubmitEditing={this.onSubmit}
          />
          <Text>{textValue}</Text>
          <Switch
            value={switchValue}
            onValueChange={value => this.onSwitchChange(value)}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  myView: {
    backgroundColor: "#000"
  },
  mtText1: {
    color: "red"
  },
  mtText2: {
    color: "#fff"
  },
  container: {
    flexDirection: "row",
    height: 100
  },
  v1: {
    flex: 1,
    backgroundColor: "red",
    padding: 10
  },
  v2: {
    flex: 1,
    backgroundColor: "pink",
    padding: 10
  },
  v3: {
    flex: 1,
    backgroundColor: "orange",
    padding: 10
  }
});
