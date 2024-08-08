import { View, Text, StyleSheet, Image, ViewStyle } from "react-native";
import React from "react";
import apartments from '@assets/data/project5/apartments.json';

type ApartmentListItem={
    apartment: (typeof apartments)[0];
    containerStyle?: ViewStyle;
}

const ApartmentListItem = ({ apartment, containerStyle = {} } : ApartmentListItem) => {

  return (
    <View style={[styles.card, containerStyle]}>
      <Image source={{ uri: apartment.image }} style={styles.image} />
      <View style={styles.rightContainer}>
        <Text style={styles.title}>{apartment.title}</Text>

        <Text style={styles.description}>{apartment.description}</Text>
        <View style={styles.footer}>
          <Text style={styles.price}>$ {apartment.price}</Text>
          <Text style={styles.price}>★ {apartment.numberOfStars} / 5</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    
    borderRadius: 10,
    flexDirection: "row",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  price: {
    color: "black",
    fontWeight: "bold",
  },
  description: {
    color: "grey",
  },
  rightContainer: {
    marginHorizontal: 10,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 'auto',
  },
});

export default ApartmentListItem;
