import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  NavigationContainer,
  DefaultTheme,
  useTheme,
} from '@react-navigation/native';
import React from 'react';
import {HOME_PAGE, SETTINGS_PAGE} from '../shared/constant/Path';
import HomePage from './HomePage';
import SettingsPage from './SettingsPage';
import ThemeUtil from '../shared/util/ThemeUtil';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  const themeUtil = ThemeUtil();
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={themeUtil}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            statusBarColor: themeUtil.colors.background,
            statusBarStyle: 'light',
          }}>
          <Stack.Screen name={HOME_PAGE} component={HomePage} />
          <Stack.Screen name={SETTINGS_PAGE} component={SettingsPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default RootNavigation;
