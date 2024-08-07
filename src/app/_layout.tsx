import {
  useFonts,
  Inter_600SemiBold,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  AmaticSC_400Regular,
  AmaticSC_700Bold,
} from "@expo-google-fonts/amatic-sc";
import { useEffect, useState } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import AnimatedSplashScreen from "@/components/project4/AnimatedSplashScreen";
import Animated, { FadeIn } from "react-native-reanimated";

SplashScreen.preventAutoHideAsync(); // Comment this to apply the customized splash screen

export default function RootLayout() {
  const [appReady, setAppReady] = useState(false);
  const [splashAnimationComplete, setSplashAnimationComplete] = useState(false);
  const [fontsLoaded, fontError] = useFonts({
    Inter: Inter_400Regular,
    InterSemi: Inter_600SemiBold,
    Amatic: AmaticSC_400Regular,
    AmaticBold: AmaticSC_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync(); // Comment this to apply the customized splash screen
      // setAppReady(true); // Uncomment the following code to show the animated splash screen
    }
  }, [fontsLoaded, fontError]);

  const showAnimatedSplash = !appReady || !splashAnimationComplete;

  // Show the animated splash screen until the app is ready
  // Uncomment the following code to show the animated splash screen
     /* if (showAnimatedSplash) {
    return (
      <AnimatedSplashScreen
        onAnimationFinish={(isCancelled) => {
          if (!isCancelled) {
            setSplashAnimationComplete(true);
          }
        }}
      />
    );
  } */

    if (!fontsLoaded || fontError) {
    return null;
    }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Animated.View style={{ flex: 1 }} entering={FadeIn}>
        <Stack screenOptions={{}}>
          <Stack.Screen
            name="index"
            options={{ title: "React Native Rookie Collection" }}
          />
        </Stack>
      </Animated.View>
    </GestureHandlerRootView>
  );
}
