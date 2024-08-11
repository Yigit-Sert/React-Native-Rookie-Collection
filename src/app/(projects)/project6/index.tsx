import React from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from 'react-native';
import { Link, Stack } from 'expo-router';

export default function ProjectExplanationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ headerShown: true, title: 'Tinder Explanation' }}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>Day 6: Tinder Project Explanation</Text>

        <Text style={styles.sectionHeader}>1. index.tsx</Text>
        <Text style={styles.paragraph}>
          This file represents the main screen of the Tinder project. It provides
          an overview of the project and contains a button that navigates to the
          Tinder screen. The screen title is set to "Day 6: Tinder", and the content
          is wrapped in a SafeAreaView to ensure it appears within the safe area
          boundaries.
        </Text>

        <Text style={styles.sectionHeader}>2. tinder.tsx</Text>
        <Text style={styles.paragraph}>
          This file creates the main Tinder screen where user cards are displayed.
          Users can swipe the cards left or right to respond to them. The user data
          is initially provided through dummy data, and the screen manages the state
          of the current card index using animated values.
        </Text>

        <Text style={styles.sectionHeader}>3. TinderScreen.tsx</Text>
        <Text style={styles.paragraph}>
          This file defines the TinderScreen component. It renders user cards by
          iterating over the user data and passing each user to the TinderCard
          component. The screen also handles the swipe gestures using the PanGesture
          handler, which updates the card's position and triggers a response when
          the card is swiped off the screen.
        </Text>

        <Text style={styles.sectionHeader}>4. TinderCard.tsx</Text>
        <Text style={styles.paragraph}>
          This file defines the TinderCard component, which represents a single
          user card. It displays the user's name and image, and handles swipe
          gestures with animated styles. When the swipe gesture exceeds a certain
          threshold, the card is animated off the screen, and the corresponding
          response (like or dislike) is recorded.
        </Text>

        <Text style={styles.sectionHeader}>5. dummyUsers</Text>
        <Text style={styles.paragraph}>
          This file contains the dummy user data used in the Tinder project. Each
          user is represented by an ID, name, and image URL. This data is used to
          display the user cards on the screen and allows users to interact with
          the cards.
        </Text>
      </ScrollView>
      <Link href={'/project6/tinder'} asChild>
        <Button title="Go to Tinder" />
      </Link>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#555',
    marginTop: 15,
    marginBottom: 5,
  },
  paragraph: {
    fontSize: 16,
    color: '#444',
    marginBottom: 10,
    lineHeight: 24,
  },
});



// import { View, Text, Button } from 'react-native';
// import React from 'react';
// import { Link, Stack } from 'expo-router';
// import { SafeAreaView } from 'react-native-safe-area-context';


// const DayDetailsScreen = () => {
//   return (
//     <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
//       <Stack.Screen options={{ title: 'Day 6: Tinder' }} />


//       <Link href="/project6/tinder" asChild>
//         <Button title="Go to Tinder" />
//       </Link>
//     </SafeAreaView>
//   );
// };

// export default DayDetailsScreen;