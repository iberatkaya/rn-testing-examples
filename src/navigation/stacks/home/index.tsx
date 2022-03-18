import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../../screens/home';
import { HomeStackParamList } from '../../types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default HomeStack;
