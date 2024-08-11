import TinderCard from '@components/project6/TinderCard';
import { Stack } from 'expo-router';
import { View } from 'react-native';
import { useSharedValue } from 'react-native-reanimated';
import { users  } from './tinder';

export const TinderScreen = () => {
  const activeIndex = useSharedValue(0);

  type UserType = {
    id: number;
    image: string;
    name: string;
  };  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Stack.Screen options={{ headerShown: false }} />

      {users.map((user: UserType, index: number) => (
        <TinderCard
          key={user.id}
          user={user}
          numOfCards={users.length}
          index={index}
          activeIndex={activeIndex}
          onResponse={(response: boolean) => {
            // handle response here
          }}
        />
      ))}
    </View>
  );
};