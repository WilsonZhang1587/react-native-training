import React, { Component } from "react";
import { Text, View, StyleSheet, ListView } from "react-native";

const users = [
  { name: "John Doe" },
  { name: "Brad Traversy" },
  { name: "Steve Smith" },
  { name: "Janet Williams" }
];

export default class Test2 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      userDataSource: ds.cloneWithRows(users)
    };
  }
  static defaultProps = {};

  renderRow = (user, sectionId, rowId, heightlightRow) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>{user.name}</Text>
      </View>
    );
  };

  render() {
    const { userDataSource } = this.state;
    return <ListView dataSource={userDataSource} renderRow={this.renderRow} />;
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    // justifyContent: "center",
    padding: 10,
    backgroundColor: "#f4f4f4",
    marginBottom: 3
  },
  rowText: {
    flex: 1
  }
});
