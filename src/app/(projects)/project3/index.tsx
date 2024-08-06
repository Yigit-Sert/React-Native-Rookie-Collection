import React from "react";
import { Text, StyleSheet, SafeAreaView, ScrollView, Button } from "react-native";
import { Link, Stack } from "expo-router";

export default function ExplanationScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{ headerShown: true, title: "Markdown Editor Screen Explanation" }}
      />

      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.header}>EditorScreen Component Explanation</Text>

        <Text style={styles.sectionHeader}>Key Features and Functionality</Text>

        <Text style={styles.subHeader}>1. State Management:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>content</Text>: Holds the current Markdown content, initialized with a default value.
          {"\n"}
          <Text style={styles.boldText}>tab</Text>: Manages the current tab view, toggling between "edit" and "preview".
        </Text>

        <Text style={styles.subHeader}>2. Tabs:</Text>
        <Text style={styles.paragraph}>
          <Text style={styles.boldText}>Edit</Text>: Displays a <Text style={styles.boldText}>TextInput</Text> for editing Markdown content.
          {"\n"}
          <Text style={styles.boldText}>Preview</Text>: Displays the rendered Markdown content using <Text style={styles.boldText}>MarkdownDisplay</Text>.
        </Text>

        <Text style={styles.subHeader}>3. Conditional Rendering:</Text>
        <Text style={styles.paragraph}>
          Based on the active tab, either the <Text style={styles.boldText}>TextInput</Text> or <Text style={styles.boldText}>MarkdownDisplay</Text> is shown.
        </Text>

        <Text style={styles.subHeader}>4. Styling:</Text>
        <Text style={styles.paragraph}>
          Styles are applied to the container, input fields, and tabs to enhance user interface and experience.
        </Text>
      </ScrollView>

      <Link href={"/project3/editor"} asChild>
        <Button title="Go to Editor" />
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
  subHeader: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#666",
    marginTop: 10,
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


// import React from "react";
// import { View, Text, Button } from "react-native";
// import { Link, Stack } from "expo-router";

// const App = () => {
//   return (
//     <View>
//       <Stack.Screen options={{ title: "Markdown Screen" }} />
//       <Text>MARKDOWN</Text>

//       <Link href={"/project3/editor"} asChild>
//         <Button title="Go to Editor" />
//       </Link>
//     </View>
//   );
// };

// export default App;
