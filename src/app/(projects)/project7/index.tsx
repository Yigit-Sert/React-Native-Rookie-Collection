import { View, Text, Button } from 'react-native';
import React from 'react';
import { Link, Stack } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';


const DayDetailsScreen = () => {
  return (
    <SafeAreaView edges={['bottom']} style={{ flex: 1 }}>
      <Stack.Screen options={{ title: 'Project7: Voice' }} />


      <Link href="/project7/memos" asChild>
        <Button title="Go to Voice Memos" />
      </Link>
    </SafeAreaView>
  );
};

export default DayDetailsScreen;