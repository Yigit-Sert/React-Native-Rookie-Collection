import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=40.76371&lon=30.36784&appid=c85209f25dcc30dff6b095b99bf9c569&units=metric`;

type Weather = {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
};

const WeatherScreen = () => {
  const [weather, setWeather] = useState<Weather>();

  const fetchWeather = async () => {
    const results = await fetch(url);
    const data = await results.json();
    console.log(JSON.stringify(data, null, 2));
    setWeather(data);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (!weather) {
    return <ActivityIndicator />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.location}>{weather.name}</Text>
      <Text style={styles.temp}>{Math.round(weather.main.temp)}°</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  location: {
    fontWeight: '700',
    fontSize: 30,
  },
  temp: {
    fontWeight: 'bold',
    fontSize: 150,
    color: 'grey'
  },
});

export default WeatherScreen;
