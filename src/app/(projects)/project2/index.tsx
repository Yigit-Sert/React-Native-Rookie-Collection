import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import { Link, Stack } from "expo-router";

export default function ExplanationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ headerShown: true, title: "Animated Onboarding Screen" }}
      />
      
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>
          OnboardingScreen Component Explanation
        </Text>

        <Text style={styles.sectionHeader}>Key Features and Functionality</Text>

        <Text style={styles.subHeader}>1. State Management:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>step</Text>: Manages the current step of
          the onboarding process. Initialized to 0.
          {"\n"}
          <Text style={styles.boldText}>data</Text>: Contains the information of
          the current step, derived from the onboardingSteps array based on the
          step state.
        </Text>

        <Text style={styles.subHeader}>2. Onboarding Steps Data:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>onboardingSteps</Text>: An array of
          objects, each containing an icon, title, and description for each step
          of the onboarding process.
        </Text>

        <Text style={styles.subHeader}>3. Functions:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>onNext</Text>: Advances to the next step
          if available; otherwise, it calls onSkip.
          {"\n"}
          <Text style={styles.boldText}>onBack</Text>: Goes back to the previous
          step if available; otherwise, it calls onSkip.
          {"\n"}
          <Text style={styles.boldText}>onSkip</Text>: Navigates back to the
          previous screen using router.back().
        </Text>

        <Text style={styles.subHeader}>4. Gesture Handling:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>swipes</Text>: A gesture detector that
          handles left and right fling gestures to navigate through the steps
          using GestureDetector and Gesture from react-native-gesture-handler.
        </Text>

        <Text style={styles.subHeader}>5. Animations:</Text>
        <Text style={styles.paragraph}>
          Utilizes Animated components from react-native-reanimated for smooth
          transitions between steps:
          {"\n"}
          <Text style={styles.boldText}>FadeIn, FadeOut</Text> for fading
          effects.
          {"\n"}
          <Text style={styles.boldText}>SlideInRight, SlideOutLeft</Text> for
          sliding effects.
          {"\n"}
          Ensures unique keys for animated components to prevent rendering
          issues.
        </Text>

        <Text style={styles.subHeader}>6. UI Layout:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>SafeAreaView</Text>: Ensures content is
          rendered within safe boundaries on devices.
          {"\n"}
          <Text style={styles.boldText}>View</Text>: Contains different sections
          of the screen, including the step indicators, animated image view,
          footer, and buttons.
          {"\n"}
          <Text style={styles.boldText}>Text and Animated.Text</Text>: Displays
          the title and description with animations.
          {"\n"}
          <Text style={styles.boldText}>FontAwesome5</Text>: Renders the icons
          for each step.
        </Text>

        <Text style={styles.subHeader}>7. Styles:</Text>
        <Text style={styles.paragraph}>
          Defined using <Text style={styles.boldText}>StyleSheet.create</Text>{" "}
          to maintain a consistent and responsive design.
          {"\n"}
          Different styles for layout elements such as{" "}
          <Text style={styles.boldText}>
            page, animatedImageView, image, footer
          </Text>
          , and buttons.
        </Text>
      </ScrollView>

      <Link href={"/project2/onboarding"} asChild>
        <Button title="Go to Onboarding" />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15141a",
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#cef202",
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fdfdfd",
    marginTop: 15,
    marginBottom: 5,
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fdfdfd",
    marginTop: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "gray",
    marginBottom: 10,
    lineHeight: 24,
  },
  boldText: {
    fontWeight: "bold",
  },
});

// import React from "react";
// import { View, Text, Button, StyleSheet, SafeAreaView, ScrollView } from "react-native";
// import { Link, Stack } from "expo-router";

// const App = () => {
//   return (
//     <View>
//       <Stack.Screen options={{ title: "Animated Onboarding Flow" }} />
//       <Text>this page is supposed to be the readme in the app</Text>

//       <Link href={"/project2/onboarding"} asChild>
//         <Button title="Go to Onboarding" />
//       </Link>
//     </View>
//   );
// };

// export default App;
