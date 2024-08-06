import React, { useState } from "react";
import { Text, View, StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Stack, router } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  FadeIn,
  FadeOut,
  SlideInRight,
  SlideOutLeft,
} from "react-native-reanimated";

const onboardingSteps = [
  {
    icon: "people-arrows",
    title: "Track transactions",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias est modi inventore earum numquam quisquam pariatur natus, eligendi neque",
  },
  {
    icon: "chart-line",
    title: "Analyze data",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias est modi inventore earum numquam quisquam pariatur natus, eligendi neque",
  },
  {
    icon: "wallet",
    title: "Manage budget",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias est modi inventore earum numquam quisquam pariatur natus, eligendi neque",
  },
  {
    icon: "hand-holding-usd",
    title: "Save money",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias est modi inventore earum numquam quisquam pariatur natus, eligendi neque",
  },
  {
    icon: "credit-card",
    title: "Pay bills",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero molestias est modi inventore earum numquam quisquam pariatur natus, eligendi neque",
  },
];

export default function OnboardingScreen() {
  const [step, setStep] = useState(0);

  const data = onboardingSteps[step];

  // functions
  const onNext = () => {
    if (step < onboardingSteps.length - 1) {
      setStep(step + 1);
    } else {
      onSkip();
    }
  };

  const onBack = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      onSkip();
    }
  };

  const onSkip = () => {
    router.back();
  };

  const swipes = Gesture.Simultaneous(
    Gesture.Fling().direction(Directions.RIGHT).onEnd(onBack),
    Gesture.Fling().direction(Directions.LEFT).onEnd(onNext)
  );

  return (
    <SafeAreaView style={styles.page}>
      {/* title is crashed because headerShown attribute is set to false */}
      <Stack.Screen
        options={{ headerShown: false, title: "Animated Onboarding Screen" }}
      />

      <GestureDetector gesture={swipes}>
        <View style={styles.pageContent}>
          <View style={styles.stepIndicatorContainer}>
            {onboardingSteps.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.stepIndicator,
                  { backgroundColor: step === index ? "#cef202" : "#302e38" },
                ]}
              />
            ))}
          </View>

          <Animated.View
            entering={FadeIn}
            exiting={FadeOut}
            key={step}
            style={styles.animatedImageView}
          >
            <FontAwesome5
              style={styles.image}
              name={data.icon}
              size={100}
              color="#cef202"
            />
          </Animated.View>

          <View style={styles.footer}>
            <Animated.View
              entering={SlideInRight}
              exiting={SlideOutLeft}
              key={step}
            >
              <Text style={styles.title}>{data.title}</Text>
              <Animated.Text
                entering={SlideInRight.delay(100)}
                key={`description-${step}`}
                style={styles.description}
              >
                {data.description}
              </Animated.Text>
            </Animated.View>

            <View style={styles.buttonsRow}>
              <Text onPress={onSkip} style={styles.buttonText}>
                Skip
              </Text>
              <Pressable onPress={onNext} style={styles.button}>
                <Text style={styles.buttonText}>Next</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </GestureDetector>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#15141a",
    padding: 20,
  },
  animatedImageView: {
    flex: 1,
    justifyContent: "center",
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  pageContent: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    color: "#fdfdfd",
    fontSize: 24,
    fontFamily: "Inter",
    letterSpacing: 1,
    marginVertical: 10,
  },
  description: {
    color: "gray",
    fontSize: 16,
    fontFamily: "Inter",
    lineHeight: 24,
  },
  footer: {
    marginTop: "auto",
  },
  button: {
    backgroundColor: "#302e38",
    borderRadius: 5,
    flex: 1,
  },
  buttonsRow: {
    // justifyContent: "flex-end",
    marginTop: 20,
    gap: 20,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    color: "#fdfdfd",
    // backgroundColor: 'red',
    textAlign: "center",
    fontFamily: "InterSemi",
    fontSize: 16,
    padding: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },

  //   steps
  stepIndicatorContainer: {
    flexDirection: "row",
    gap: 5,
  },
  stepIndicator: {
    flex: 1,
    width: 10,
    height: 5,
    backgroundColor: "#grey",
    borderRadius: 5,
    marginVertical: 20,
  },
});
