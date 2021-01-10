import React from "react";
import { Button } from "react-native";

const Fetch = props => {
  return <Button title="Get Location" onPress={props.onGet} />;
};

export default Fetch;
