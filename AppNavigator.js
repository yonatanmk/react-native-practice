import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Friends from './Friends';
import DetailsScreen from './DetailsScreen';
import CreatePostScreen from './CreatePostScreen';

const Stack = createStackNavigator();

const AppNavigator = ({screenProps}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home">
        {props => <Home {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen
        name="Details"
        options={{title: 'Overview'}}
        initialParams={{itemIdFromScreen: 'YAY'}}>
        {props => <DetailsScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="Friends">
        {props => <Friends {...props} screenProps={screenProps} />}
      </Stack.Screen>
      <Stack.Screen name="CreatePost">
        {props => <CreatePostScreen {...props} screenProps={screenProps} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AppNavigator;
