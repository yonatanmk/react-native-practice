import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text} from 'react-native';
import Home from './Home';
import Friends from './Friends';
import DetailsScreen from './DetailsScreen';
import CreatePostScreen from './CreatePostScreen';

const Stack = createStackNavigator();

const AppNavigator = ({screenProps}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="Home"
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#05346C',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        {props => <Home {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={({
          route: {
            params: {name, detailsNumber},
          },
        }) => ({
          title: `${name} ${detailsNumber}`,
        })}
        initialParams={{
          itemIdFromScreen: 'YAY',
          detailsNumber: 1,
          name: 'Details',
        }}>
        {props => <DetailsScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Friends">
        {props => <Friends {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen
        name="CreatePost"
        options={{headerTitle: props => <LogoTitle {...props} />}}>
        {props => <CreatePostScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

function LogoTitle() {
  return <Text>Create Post Header Component</Text>;
}

export default AppNavigator;
