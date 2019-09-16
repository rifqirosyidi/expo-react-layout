import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  pressed = (e) => {
    console.log("pressed")
  }

  return (
    <View style={styles.container}>
      <Text>Hello, to React Native :D</Text>
      <Button title="Click Me" color="#0F111A" onPress={this.pressed} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
