import { Text, View, StyleSheet } from "react-native";

type DayListItem = {
  day: number;
};

export default function DayListItem({ day }: DayListItem) {
  return (
    <View style={styles.box}>
      <Text style={styles.text}>{day}</Text>
    </View>
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
  },
});
