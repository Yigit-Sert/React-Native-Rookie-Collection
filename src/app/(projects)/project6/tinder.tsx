import TinderCard from '@/components/project6/TinderCard';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import {
  interpolate,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const dummyUsers = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    name: "Alexandra",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    name: "Michael",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    name: "Sophia",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    name: "Liam",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&q=80&w=1080&auto=format&fit=crop",
    name: "Emma",
  },
];

const TinderScreen = () => {
  const [users, setUsers] = useState(dummyUsers);
  const activeIndex = useSharedValue(0);
  const [index, setIndex] = useState(0);

  useAnimatedReaction(
    () => activeIndex.value,
    (value, prevValue) => {
      if (Math.floor(value) !== index) {
        runOnJS(setIndex)(Math.floor(value));
      }
    }
  );

  useEffect(() => {
    if (index > users.length - 3) {
      console.warn('Last 2 cards remining. Fetch more!');
      setUsers((usrs) => [...usrs, ...dummyUsers.reverse()]);
    }
  }, [index]);

  const onResponse = (res: boolean) => {
    console.log('on Response: ', res);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />
      {/* <Text style={{ top: 70, position: 'absolute' }}>
        Current index: {index}
      </Text> */}
      {users.map((user, index) => (
        <TinderCard
          key={`${user.id}-${index}`}
          user={user}
          numOfCards={users.length}
          index={index}
          activeIndex={activeIndex}
          onResponse={onResponse}
        />
      ))}
    </View>
  );
};

export default TinderScreen;