import LottieView from 'lottie-react-native';
import { useRef } from 'react';
import AnimatedSplashScreen from '@/components/project4/AnimatedSplashScreen';

const SplashAnimationScreen  = () => {
  const animation = useRef<LottieView>(null);

  return <AnimatedSplashScreen />;
};

export default SplashAnimationScreen ;