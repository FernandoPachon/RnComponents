import { createStackNavigator } from '@react-navigation/stack';
import AlertScreen from '../screens/AlertScreen';
import Animation101Screen from '../screens/Animation101Screen';
import Animation102Screen from '../screens/Animation102Screen';
import HomeScreen from '../screens/HomeScreen';
import PullToRefrestshScreen from '../screens/PullToRefrestshScreen';
import SectionListScreen, { CustomSectionListScreen } from '../screens/CustomSectionListScreen';
import SwitchScreen from '../screens/SwitchScreen';
import TextImputScreen from '../screens/TextImputScreen';
import ModalScreen from '../screens/ModalScreen';
import InfiniteScrollScreen from '../screens/InfiniteScrollScreen';
import SlidesScreen from '../screens/SlidesScreen';
import ChangeThemeScreen from '../screens/ChangeThemeScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export const Navigator=()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Animation101Screen" component={Animation101Screen} />
        <Stack.Screen name="Animation102Screen" component={Animation102Screen} />
        <Stack.Screen name="SwitchScreen" component={SwitchScreen} />
        <Stack.Screen name="AlertScreen" component={AlertScreen}/>
        <Stack.Screen name="TextImputScreen" component={TextImputScreen}/>
        <Stack.Screen name="PullToRefrestshScreen" component={PullToRefrestshScreen}/>
        <Stack.Screen name="CustomSectionListScreen" component={CustomSectionListScreen}/>
        <Stack.Screen name="ModalScreen" component={ModalScreen}/>
        <Stack.Screen name="InfiniteScrollScreen" component={InfiniteScrollScreen}/>
        <Stack.Screen name="SlidesScreen" component={SlidesScreen}/>
        <Stack.Screen name="ChangeThemeScreen" component={ChangeThemeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
