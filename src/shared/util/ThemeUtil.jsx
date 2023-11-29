import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {COLORS} from '../constant/Theme';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';

const ThemeUtil = () => {
  const themeColor = useSelector(state => state.AppReducer.themeColor);

  switch (themeColor) {
    case COLORS.DARK:
      return {
        ...DarkTheme,
      };
    case COLORS.RED:
      return {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#B06161',
          background: '#DC8686',
          text: '#fefefe',
        },
      };
    default:
      return {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          primary: '#B06161',
          background: '#DC8686',
          text: '#fefefe',
        },
      };
  }
};

export default ThemeUtil;
