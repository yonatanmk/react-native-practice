import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = ({route, navigation, screenProps}) => {
  const [post, setPost] = useState('');

  useEffect(() => {
    if (route.params && route.params.post) {
      setPost(route.params.post);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>We have {screenProps.currentFriends.length} friends!</Text>
      <Text style={{margin: 10}}>Post: {route.params?.post}</Text>
      <Button
        title="Add some friends"
        onPress={() => navigation.navigate('Friends')}
      />
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Details', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
      <Button
        title="Create post"
        onPress={() => navigation.navigate('CreatePost')}
      />
      <Button title="Counter" onPress={() => navigation.navigate('Counter')} />
      <Button
        onPress={() => navigation.navigate('MyModal')}
        title="Open Modal"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
