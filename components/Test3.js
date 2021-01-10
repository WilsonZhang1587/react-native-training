import React, { Component } from "react";
import { Text, View, StyleSheet, ListView } from "react-native";

export default class Test3 extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      userDataSource: ds
    };
  }
  static defaultProps = {};

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    const { userDataSource } = this.state;
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        this.setState({
          userDataSource: userDataSource.cloneWithRows(data)
        });
      });
  };

  renderRow = (user, sectionId, rowId, heightlightRow) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowText}>
          {user.name}: {user.email}
        </Text>
      </View>
    );
  };

  render() {
    const { userDataSource } = this.state;
    return (
      <View>
        <Text>---------------------------------------------</Text>
        <ListView dataSource={userDataSource} renderRow={this.renderRow} />
      </View>
    );
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
