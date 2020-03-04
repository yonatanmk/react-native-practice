import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default class Home extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
        <Text>
          We have {this.props.screenProps.currentFriends.length} friends!
        </Text>
        <Button
          title="Add some friends"
          onPress={() => this.props.navigation.navigate('Friends')}
        />
        <Button
          title="Go To Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
