import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect, useCallback } from 'react';
import { Audio, AVPlaybackStatus } from 'expo-av';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';

export type Memo = {
  uri: string;
  metering: number[];
};

const MemoListItem = ({ memo }: { memo: Memo }) => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [status, setStatus] = useState<AVPlaybackStatus>();

  // Shared value for progress animation
  const progress = useSharedValue(0);

  // Load Sound
  const loadSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      { uri: memo.uri },
      { shouldPlay: false, progressUpdateIntervalMillis: 1000 / 60 },
      onPlaybackStatusUpdate
    );
    setSound(sound);
  };

  // Playback Status Update Callback
  const onPlaybackStatusUpdate = useCallback(
    async (newStatus: AVPlaybackStatus) => {
      setStatus(newStatus);

      if (newStatus.isLoaded && newStatus.didJustFinish) {
        await sound?.setPositionAsync(0);
      }

      if (newStatus.isLoaded && newStatus.positionMillis !== undefined && newStatus.durationMillis !== undefined) {
        progress.value = newStatus.positionMillis / newStatus.durationMillis;
      }
    },
    [sound]
  );

  useEffect(() => {
    loadSound();
    return () => {
      sound?.unloadAsync();
    };
  }, [memo]);

  // Play or Pause Sound
  const toggleSound = async () => {
    if (!sound) return;

    if (status?.isLoaded && status.isPlaying) {
      await sound.pauseAsync();
    } else {
      await sound.playAsync();
    }
  };

  // Formatting Milliseconds to MM:SS
  const formatMillis = (millis: number) => {
    const minutes = Math.floor(millis / (1000 * 60));
    const seconds = Math.floor((millis % (1000 * 60)) / 1000);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  const isPlaying = status?.isLoaded && status.isPlaying;
  const position = status?.isLoaded ? status.positionMillis : 0;
  const duration = status?.isLoaded ? status.durationMillis : 1;

  // Animated Indicator Style
  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    left: withTiming(`${progress.value * 100}%`, { duration: 100 }),
  }));

  // Generating Waveform Lines
  const numLines = 50;
  const lines = Array.from({ length: numLines }, (_, i) => {
    const meteringIndex = Math.floor((i * memo.metering.length) / numLines);
    const nextMeteringIndex = Math.ceil(
      ((i + 1) * memo.metering.length) / numLines
    );
    const values = memo.metering.slice(meteringIndex, nextMeteringIndex);
    const average = values.reduce((sum, a) => sum + a, 0) / values.length;
    return average;
  });

  return (
    <View style={styles.container}>
      <FontAwesome5
        onPress={toggleSound}
        name={isPlaying ? 'pause' : 'play'}
        size={20}
        color={'gray'}
      />

      <View style={styles.playbackContainer}>
        <View style={styles.wave}>
          {lines.map((db, index) => (
            <View
              key={index}
              style={[
                styles.waveLine,
                {
                  height: interpolate(db, [-60, 0], [5, 50], {
                    extrapolateLeft: 'clamp',
                    extrapolateRight: 'clamp',
                  }),
                  backgroundColor:
                    progress.value > index / lines.length ? 'royalblue' : 'gainsboro',
                },
              ]}
            />
          ))}
        </View>

        <Animated.View
          style={[styles.playbackIndicator, animatedIndicatorStyle]}
        />

        <Text style={styles.durationText}>
          {formatMillis(position || 0)} / {formatMillis(duration || 0)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 10,
    gap: 15,

    // shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  playbackContainer: {
    flex: 1,
    height: 80,
    justifyContent: 'center',
  },

  playbackIndicator: {
    width: 10,
    aspectRatio: 1,
    borderRadius: 10,
    backgroundColor: 'royalblue',
    position: 'absolute',
  },

  wave: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },

  waveLine: {
    flex: 1,
    height: 30,
    backgroundColor: 'gainsboro',
    borderRadius: 20,
  },

  durationText: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    color: 'gray',
    fontSize: 12,
    fontFamily: 'Inter',
  },
});

export default MemoListItem;
