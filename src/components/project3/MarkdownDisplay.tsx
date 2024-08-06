import React, { PropsWithChildren } from "react";
import { Text, StyleSheet, ScrollView } from "react-native";
import Markdown from "react-native-markdown-display";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  return (
    <ScrollView style={styles.page} contentInsetAdjustmentBehavior="automatic">
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

const markdownStyles = {
  heading1: {
    fontSize: 24,
    color: "purple",
  },
  heading2: {
    fontSize: 20,
    color: "blue",
  },
  heading3: {
    fontSize: 16,
    color: "green",
  },
  heading4: {
    fontSize: 14,
    color: "orange",
  },
  list: {
    color: "red",
  },
  listItem: {
    color: "red",
  },
  blockquote: {
    color: "gray",
  },
  text: {
    color: "black",
  },
  link: {
    color: "blue",
  },
  image: {
    width: 200,
    height: 200,
  },
  code: {
    color: "black",
    backgroundColor: "lightgray",
  },
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    flex: 1,
    padding: 20,
  },
});

export default MarkdownDisplay;
