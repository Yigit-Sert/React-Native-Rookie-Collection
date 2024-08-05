import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

// Remove this style import when a ui library is applied
import { StyleSheet } from "react-native";

const App = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Readme of the application" }} />
      <Text style={styles.text}>
        this page is supposed to be the readme in the app
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    margin: 20,
  },
});
