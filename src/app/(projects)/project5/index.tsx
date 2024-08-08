import React from "react";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Button,
} from "react-native";
import { Link, Stack } from "expo-router";

export default function ProjectExplanationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ headerShown: true, title: "AIRBNB Map Explanation" }}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>
          Project 5: AIRBNB Map Component Explanation
        </Text>

        <Text style={styles.sectionHeader}>1. index.tsx</Text>
        <Text style={styles.paragraph}>
          This file represents the main screen of the Airbnb map project. It
          displays a Markdown summary of the project and contains a button that
          navigates to the Airbnb map screen. The screen title is set to
          "Project 5: AIRBNB Map", and the content is wrapped in a SafeAreaView
          to ensure it appears within the safe area boundaries.
        </Text>

        <Text style={styles.sectionHeader}>2. airbnb.tsx</Text>
        <Text style={styles.paragraph}>
          This file creates the main map screen that displays Airbnb apartments
          on Google Maps. It uses data from a JSON file to place custom markers
          representing the apartments. Additionally, it features a BottomSheet
          that lists apartment details and manages the state for selecting an
          apartment.
        </Text>

        <Text style={styles.sectionHeader}>3. ApartmentListItem.tsx</Text>
        <Text style={styles.paragraph}>
          This file defines the component that lists each apartment as an item.
          It displays the apartment's image, title, description, and price
          within a simple card layout. The layout and spacing are controlled
          using flexDirection and margin, and the apartment details are passed
          as props, allowing for custom styling.
        </Text>

        <Text style={styles.sectionHeader}>4. CustomMarker.tsx</Text>
        <Text style={styles.paragraph}>
          This file defines the custom marker component displayed on the map. It
          creates a marker showing information such as the apartment's price,
          and triggers a function when the marker is pressed. The marker is
          created using the Marker component from react-native-maps and is
          styled with specific styles.
        </Text>

        <Text style={styles.sectionHeader}>5. apartments.json</Text>
        <Text style={styles.paragraph}>
          This file stores the apartment data in JSON format. It includes
          information such as the apartment's ID, location, price, title,
          description, number of bedrooms and bathrooms, and more. This data is
          used in the map and list components to display the apartments.
        </Text>
      </ScrollView>
      <Link href={"/project5/airbnb"} asChild>
        <Button title="Go to Airbnb Map" />
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
});

// import { View, Text, Button } from 'react-native';
// import React from 'react';
// import { Link, Stack } from 'expo-router';
// import MarkdownDisplay from '@components/project3/MarkdownDisplay';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const description = `
// # AIRBNB Map
// `;

// const App = () => {
//   return (
//     <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
//       <Stack.Screen options={{ title: 'Project 5: AIRBNB Map' }} />

//       <MarkdownDisplay>{description}</MarkdownDisplay>

//       <Link href="/project5/airbnb" asChild>
//         <Button title="Go to the animation" />
//       </Link>

//     </SafeAreaView>
//   );
// };

// export default App;
