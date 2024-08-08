import { View, Text } from "react-native";
import React from "react";
import { Marker } from "react-native-maps";

const CustomMarker = ({
  apartment,
  onPress,
}: {
  apartment: any;
  onPress: () => void;
}) => {
  return (
    <Marker
      onPress={onPress}
      key={apartment.id}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          padding: 3,
          paddingHorizontal: 10,
          borderWidth: 1,
          borderColor: "grey",
          borderRadius: 20,
        }}
      >
        <Text style={{ fontWeight: "bold" }}>$ {apartment.price}</Text>
      </View>
    </Marker>
  );
};

export default CustomMarker;
