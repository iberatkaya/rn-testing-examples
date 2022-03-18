import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from '../../../screens/settings';
import { SettingsStackParamList } from '../../types';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
};

export default SettingsStack;
