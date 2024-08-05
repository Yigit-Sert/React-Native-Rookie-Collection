import { StatusBar } from "expo-status-bar";
import { FlatList, StyleSheet, View } from "react-native";
import ProjectListItem from "@/components/core/ProjectListItem";

const projects = [...Array(30)].map((val, index) => index + 1);

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        contentContainerStyle={styles.content}
        columnWrapperStyle={styles.column}
        numColumns={3}
        renderItem={({ item }) => <ProjectListItem project={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    gap: 10,
    padding: 10,
  },
  column: {
    gap: 10,
  },
});
