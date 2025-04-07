import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import data from "../services/mockData";
import VerticalList from "../components/VerticalList";
const index = () => {
  return (
    <View style={styles.container}>
      <VerticalList data={data} />
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    justifyContent: "center",
  },
});
