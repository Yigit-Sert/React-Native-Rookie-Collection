import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import { Stack, Link } from "expo-router";

export default function ExplanationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ headerShown: true, title: "Code Explanation" }}
      />
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>
          Project 4 Code Explanation: SplashScreen
        </Text>

        <Text style={styles.sectionHeader}>1. index.tsx</Text>
        <Text style={styles.paragraph}>
          The <Text style={styles.boldText}>index.tsx</Text> file defines the
          main screen for Project 4. It includes a Markdown description and two
          links to different screens: an animation screen and a splash screen
          animation. The main components used are:
          {"\n"}- <Text style={styles.boldText}>SafeAreaView</Text>: Ensures
          content is displayed within the safe area boundaries of a device.
          {"\n"}- <Text style={styles.boldText}>MarkdownDisplay</Text>: Displays
          the Markdown content.
          {"\n"}- <Text style={styles.boldText}>Link</Text>: Provides navigation
          to other screens.
        </Text>

        <Text style={styles.sectionHeader}>2. animation.tsx</Text>
        <Text style={styles.paragraph}>
          The <Text style={styles.boldText}>animation.tsx</Text> file contains a
          screen that displays an animation using the Lottie library. Key
          components include:
          {"\n"}- <Text style={styles.boldText}>LottieView</Text>: Displays the
          Lottie animation.
          {"\n"}- <Text style={styles.boldText}>Button</Text>: Controls to play,
          pause, and reset the animation.
        </Text>

        <Text style={styles.sectionHeader}>3. splash.tsx</Text>
        <Text style={styles.paragraph}>
          The <Text style={styles.boldText}>splash.tsx</Text> file uses the{" "}
          <Text style={styles.boldText}>AnimatedSplashScreen</Text> component to
          show a splash screen animation. It imports and uses:
          {"\n"}- <Text style={styles.boldText}>LottieView</Text>: For the
          animation reference.
          {"\n"}- <Text style={styles.boldText}>AnimatedSplashScreen</Text>:
          Custom component for the splash screen animation.
        </Text>

        <Text style={styles.sectionHeader}>4. AnimatedSplashScreen.tsx</Text>
        <Text style={styles.paragraph}>
          The <Text style={styles.boldText}>AnimatedSplashScreen.tsx</Text> file
          manages the splash screen animation. It integrates both Lottie and
          Reanimated libraries to animate the splash screen and handle animation
          completion. Key components include:
          {"\n"}- <Text style={styles.boldText}>AnimatedLottieView</Text>: Wraps
          the LottieView with Reanimated animations.
          {"\n"}- <Text style={styles.boldText}>ZoomOut</Text>: Defines the exit
          animation for the splash screen.
        </Text>

        <Text style={styles.sectionHeader}>5. _layout.tsx</Text>
        <Text style={styles.paragraph}>
          The <Text style={styles.boldText}>_layout.tsx</Text> file serves as
          the root layout component for the app. It handles the app's initial
          state, font loading, and shows the splash screen until the app is
          ready. Key components and logic include:
          {"\n"}- <Text style={styles.boldText}>useFonts</Text>: Hook to load
          custom fonts.
          {"\n"}- <Text style={styles.boldText}>useState</Text>: Manages the
          application's readiness state.
          {"\n"}- <Text style={styles.boldText}>useEffect</Text>: Updates the
          state when fonts are loaded or if there's an error.
          {"\n"}- <Text style={styles.boldText}>AnimatedSplashScreen</Text>:
          Displays the splash screen animation until the app is fully ready.
        </Text>
      </ScrollView>

      <Link href="/project4/animation" asChild>
        <Button title="Go to the animation" />
      </Link>
      <Link href="/project4/splash" asChild>
        <Button title="Splash screen animation" />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#555",
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: "#444",
    marginBottom: 10,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: "bold",
  },
});

// import { View, Text, Button } from 'react-native';
// import React from 'react';
// import { Link, Stack } from 'expo-router';
// import MarkdownDisplay from '@components/project3/MarkdownDisplay';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const description = `
// # Animated splash screen
// `;

// const App = () => {
//   return (
//     <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
//       <Stack.Screen options={{ title: 'Project 4: Splashscreen' }} />

//       <MarkdownDisplay>{description}</MarkdownDisplay>

//       <Link href="/project4/animation" asChild>
//         <Button title="Go to the animation" />
//       </Link>

//       <Link href="/project4/splash" asChild>
//         <Button title="Splash screen animation" />
//       </Link>
//     </SafeAreaView>
//   );
// };

// export default App;
