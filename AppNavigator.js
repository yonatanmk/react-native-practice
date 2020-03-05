import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, Button, View} from 'react-native';
import Home from './Home';
import Friends from './Friends';
import DetailsScreen from './DetailsScreen';
import CreatePostScreen from './CreatePostScreen';
import Counter from './Counter';

const MainStack = createStackNavigator();
const RootStack = createStackNavigator();

function AppNavigator({screenProps}) {
  return (
    <RootStack.Navigator mode="modal">
      <RootStack.Screen name="Main" options={{headerShown: false}}>
        {props => <MainStackScreen {...props} screenProps={screenProps} />}
      </RootStack.Screen>
      <RootStack.Screen name="MyModal" component={ModalScreen} />
    </RootStack.Navigator>
  );
}

const MainStackScreen = ({screenProps}) => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <MainStack.Screen
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
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#fff"
            />
          ),
        }}>
        {props => <Home {...props} screenProps={screenProps} />}
      </MainStack.Screen>
      <MainStack.Screen
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
      </MainStack.Screen>
      <MainStack.Screen name="Friends">
        {props => <Friends {...props} screenProps={screenProps} />}
      </MainStack.Screen>
      <MainStack.Screen name="CreatePost">
        {props => <CreatePostScreen {...props} screenProps={screenProps} />}
      </MainStack.Screen>
      <MainStack.Screen
        name="Counter"
        component={Counter}
        options={({navigation, route}) => ({
          headerTitle: props => <HeaderTitle {...props} />,
        })}
      />
    </MainStack.Navigator>
  );
};

function HeaderTitle() {
  return <Text>Screen Interaction</Text>;
}

function ModalScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{fontSize: 30}}>This is a modal!</Text>
      <Button onPress={() => navigation.goBack()} title="Dismiss" />
    </View>
  );
}

export default AppNavigator;
