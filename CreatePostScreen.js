import React, {useEffect} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';

export default function CreatePostScreen({navigation, route}) {
  const [postText, setPostText] = React.useState('');

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{height: 200, padding: 10, backgroundColor: 'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        onPress={() => {
          // Pass params back to home screen
          navigation.navigate('Home', {post: postText});
        }}
      />
    </>
  );
}
