import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function DetailsScreen({route, navigation}) {
  const {itemId, itemIdFromScreen, otherParam, detailsNumber} = route.params;

  useEffect(() => {
    setTimeout(() => navigation.setParams({itemId: 100}), 1000);
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Details Screen</Text>
      <Text>itemId: {itemId}</Text>
      <Text>itemIdFromScreen: {itemIdFromScreen}</Text>
      <Text>otherParam: {otherParam}</Text>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
            detailsNumber: detailsNumber + 1,
          })
        }
      />
      <Button
        title="Update the title"
        onPress={() => navigation.setOptions({title: 'Updated!'})}
      />
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go back" onPress={() => navigation.goBack()} />
      <Button
        title="Go back to first screen in stack"
        onPress={() => navigation.popToTop()}
      />
    </View>
  );
}
