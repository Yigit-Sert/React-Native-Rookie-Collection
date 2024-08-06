import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
} from "react-native";
import Markdown from "react-native-markdown-display";
import MarkdownDisplay from "@components/project3/MarkdownDisplay";

const markdownContent = `
# Markdown Editor
Type **here**
`;

const EditorScreen = () => {
  const [content, setContent] = useState(markdownContent);
  const [tab, setTab] = useState("edit");

  return (
    <View style={styles.page}>
      <View style={styles.tabsContainer}>
        <Pressable
          onPress={() => setTab("edit")}
          style={[
            styles.tab,
            tab === "edit"
              ? { backgroundColor: "lightblue" }
              : { backgroundColor: "lightgray" },
          ]}
        >
          <Text style={styles.tabText}>Edit</Text>
        </Pressable>
        <Pressable
          onPress={() => setTab("preview")}
          style={[
            styles.tab,
            tab === "preview"
              ? { backgroundColor: "lightblue" }
              : { backgroundColor: "lightgray" },
          ]}
        >
          <Text style={styles.tabText}>Preview</Text>
        </Pressable>
      </View>

      {tab === "edit" ? (
        <TextInput
          value={content}
          multiline
          style={styles.input}
          onChangeText={setContent}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
  input: {
    flex: 1,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "whitesmoke",
  },
  tabsContainer: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 20,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 10,
    backgroundColor: "lightgray",
    borderRadius: 10,
  },
  tabText: {
    color: "black",
  },
});

export default EditorScreen;
