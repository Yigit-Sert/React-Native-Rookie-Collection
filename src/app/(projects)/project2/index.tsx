import React from "react";
import { View, Text, Button } from "react-native";
import { Link, Stack } from "expo-router";

const App = () => {
  return (
    <View>
      <Stack.Screen options={{ title: "Animated Onboarding Flow" }} />
      <Text>this page is supposed to be the readme in the app</Text>

      <Link href={"/project2/onboarding"} asChild>
        <Button title="Go to Onboarding" />
      </Link>
    </View>
  );
};

export default App;
