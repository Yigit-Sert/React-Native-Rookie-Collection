import React from "react";
import { View, Text, Button } from "react-native";
import { Link, Stack } from "expo-router";

const App = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Markdown Screen" }} />
      <Text>MARKDOWN</Text>

      <Link href={"/project3/editor"} asChild>
        <Button title="Go to Editor" />
      </Link>
    </View>
  );
};

export default App;
