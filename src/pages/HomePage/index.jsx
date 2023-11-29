import {
  Animated,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/AntDesign';
import React, {useEffect, useRef, useState} from 'react';
import HomePageService from './HomePageService';

const HomePage = () => {
  const [progress, setProgress] = useState(0);
  const [started, setStart] = useState(false);
  const [paused, setPause] = useState(false);
  const [minuteIndicator, setMinuteIndicator] = useState('');
  const [secondIndicator, setSecondIndicator] = useState('');
  const opacity = useRef(new Animated.Value(1)).current;
  const {colors} = useTheme();

  const [intervalId, setIntervalId] = useState(null);

  const timeStringConverter = (minute, second) => {
    const convertedMinute = minute >= 10 ? minute : '0' + minute;
    const convertedSecond = second >= 10 ? second : '0' + second;

    return `${convertedMinute}:${convertedSecond}`;
  };

  const {startProgress, focusTime} = HomePageService({
    setIntervalId,
    setPause,
    setProgress,
    setStart,
    intervalId,
    paused,
    started,
    opacity,
  });

  useEffect(() => {
    if (progress) {
      
    }
  }, [progress]);

  return (
    <>
      <View style={[styles.container]}>
        <View style={styles.mainSection}>
          <View style={styles.titleSection}>
            <Text style={[styles.titlePomodoro, {color: colors.text}]}>
              Belajar
            </Text>
          </View>
          <Pressable style={styles.timerSection} onPress={startProgress}>
            <Animated.View
              style={{opacity, justifyContent: 'center', alignItems: 'center'}}>
              <Progress.Pie
                size={250}
                progress={progress}
                borderWidth={0}
                color={colors.text}
                style={{zIndex: 0, position: 'absolute'}}
              />
            </Animated.View>
            {!started && (
              <View style={{zIndex: 1, position: 'absolute'}}>
                <Icon name="caretright" size={100} color={colors.text} />
              </View>
            )}
            {paused && (
              <View style={{zIndex: 2, position: 'absolute'}}>
                <Icon name="pause" size={100} color={colors.text} />
              </View>
            )}
            <View style={[styles.pieBorder, {borderColor: colors.text}]} />
          </Pressable>
          <View style={styles.indicatorSection}>
            <Text style={[styles.indicatorText, {color: colors.text}]}>
              01.00
            </Text>
          </View>
        </View>
        <View style={styles.pomopickSection}>
          <Text style={[{color: colors.text}]}>Pomopick Section</Text>
        </View>
      </View>
    </>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timerSection: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 3,
  },
  mainSection: {
    justifyContent: 'space-around',
    flex: 5,
  },
  pomopickSection: {
    flex: 2,
    padding: 20,
  },
  pieBorder: {
    borderRadius: 300 / 2,
    borderWidth: 10,
    width: 300,
    height: 300,
    zIndex: 2,
    position: 'absolute',
  },
  pauseBackround: {
    height: 250,
    width: 250,
    borderRadius: 250 / 2,
    opacity: 0.5,
    zIndex: 1,
    backgroundColor: '#000',
    position: 'absolute',
  },
  titlePomodoro: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  indicatorSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  indicatorText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
