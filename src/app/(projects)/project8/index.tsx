import { View, Text, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { Link, Stack } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={["bottom"]} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: "Project8: Weather" }} />

      <Link href="/project8/weather" asChild>
        <Button title="Go to Weather App" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;
