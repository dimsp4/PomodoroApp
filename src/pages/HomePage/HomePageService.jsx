import {Animated} from 'react-native';
import {useSelector} from 'react-redux';

const HomePageService = ({
  started,
  paused,
  intervalId,
  setStart,
  setPause,
  setProgress,
  setIntervalId,
  opacity,
}) => {
  const {focusTime} = useSelector(state => state.TimeReducer);

  const focusTimeFixed = 1 / (focusTime * 60);

  const startProgress = () => {
    if (started) {
      if (paused) {
        resumeProgress();
      } else {
        pauseProgress();
      }
    } else {
      clearIntervalWithId();
      setStart(true);
      setProgress(1);
      const newIntervalId = setInterval(() => {
        setProgressInterval(newIntervalId);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const pauseProgress = () => {
    fadeInAnimation();
    setPause(true);
    clearIntervalWithId();
  };

  const resumeProgress = () => {
    fadeOutAnimation();
    if (!intervalId) {
      setPause(false);
      setProgress(p => (p -= focusTimeFixed));
      const newIntervalId = setInterval(() => {
        setProgressInterval(newIntervalId);
      }, 1000);
      setIntervalId(newIntervalId);
    }
  };

  const clearIntervalWithId = (id = null) => {
    if (id) {
      clearInterval(id);
    }

    clearInterval(intervalId);
    setIntervalId(null);
  };

  const setProgressInterval = idInterval => {
    setProgress(p => {
      if (p >= focusTimeFixed) {
        const result = p - focusTimeFixed;
        if (result < focusTimeFixed) {
          setStart(false);
          clearIntervalWithId(idInterval);
          return 0;
        }
        return result;
      } else {
        setStart(false);
        clearIntervalWithId(idInterval);
      }
    });
  };

  const fadeInAnimation = () => {
    Animated.timing(opacity, {
      toValue: 0.4,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  const fadeOutAnimation = () => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return {startProgress, focusTime};
};

export default HomePageService;
