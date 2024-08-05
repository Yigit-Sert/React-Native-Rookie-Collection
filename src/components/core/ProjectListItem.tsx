import { Text, View, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";

type ProjectListItem = {
  project: number;
};

export default function ProjectListItem({ project }: ProjectListItem) {
  return (
    <Link href={`/project${project}`} asChild>
      <Pressable style={styles.box}>
        <Text style={styles.text}>{project}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: "lightblue",
    flex: 1,
    aspectRatio: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "darkblue",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 70,
    color: "darkblue",
    fontFamily: "AmaticBold",
  },
});
