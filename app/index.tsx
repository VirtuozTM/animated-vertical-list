import { StyleSheet, Text, View } from "react-native";
import React from "react";

const index = () => {
  return <View style={styles.container}></View>;
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
  },
});
