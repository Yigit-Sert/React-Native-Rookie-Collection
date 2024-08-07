import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import Animated, {
  ZoomOut,
} from 'react-native-reanimated';

const AnimatedLottieView = Animated.createAnimatedComponent(LottieView);

const AnimatedSplashScreen = ({
  onAnimationFinish = (isCancelled) => {},
}: {
  onAnimationFinish?: (isCancelled: boolean) => void;
}) => {
  const animation = useRef<LottieView>(null);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // backgroundColor: 'black',
      }}
    >
      <AnimatedLottieView
        exiting={ZoomOut}
        ref={animation}
        onAnimationFinish={onAnimationFinish}
        loop={false}
        autoPlay
        style={{
          width: '100%',
            aspectRatio: 1,
        }}
        // Find more Lottie files at https://lottiefiles.com/featured
        source={require('@assets/lottie/splash.json')}
      />
    </View>
  );
};

export default AnimatedSplashScreen;