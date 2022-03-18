import { NavigatorScreenParams } from '@react-navigation/native';

export type HomeStackParamList = {
  Home: undefined;
};

export type SettingsStackParamList = {
  Settings: undefined;
};

export type RootStackParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Settings: NavigatorScreenParams<SettingsStackParamList>;
};
