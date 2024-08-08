import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Stack } from "expo-router";
import apartments from "@assets/data/project5/apartments.json";
import CustomMarker from "@/components/project5/CustomMarker";
import ApartmentListItem from "@/components/project5/ApartmentListItem";
import BottomSheet, {
  BottomSheetView,
  BottomSheetFlatList,
  useGestureEventsHandlersDefault
} from "@gorhom/bottom-sheet";

function AirbnbScreen() {
  const [selectedApartment, setSelectedApartment] = useState<null | {
    id: number;
    latitude: number;
    longitude: number;
    price: number;
    title: string;
    description: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    numberOfStars: number;
    rating: number;
    image: string;
  }>(null);
  const [mapRegion, setMapRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const snapPoints = useMemo(() => [70, "50%", "90%"], []);

  return (
    <View>
      <Stack.Screen options={{ headerShown: false }} />
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        // initialRegion={mapRegion}
        region={mapRegion}
      >
        {apartments.map((apartment) => (
          <CustomMarker
            key={apartment.id}
            apartment={apartment}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>

      {/* Display selected apartment */}
      {selectedApartment && (
        <ApartmentListItem
          apartment={selectedApartment}
          containerStyle={{
            position: "absolute",
            bottom: Number(snapPoints[0]) + 10,
            padding: 10,
            left: 10,
            right: 10,
          }}
        />
      )}

      <BottomSheet
        index={0}
        // ref={bottomSheetRef}
        // onChange={handleSheetChanges}
        snapPoints={snapPoints}
        onChange = {(index)=>console.log('changed' + index)}
      >
        <View style={{ flex: 1 }}>
          <Text style={styles.listTitle}>Over {apartments.length} places</Text>
          <BottomSheetFlatList
            data={apartments}
            contentContainerStyle={{ gap: 10, padding: 10 }}
            renderItem={({ item }) => <ApartmentListItem apartment={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  map: { width: "100%", height: "100%" },
  listTitle: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    margin: 10,
  },
});

export default AirbnbScreen;
