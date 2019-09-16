import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

export default function App() {

  pressed = (e) => {
    console.log("pressed")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>Hello, to React Native :D</Text>
      <Text>Whatever We Want!</Text>
      <Image 
        style={{ width: 100, height: 100 }} 
        source={require('./assets/img-react.png')} />
      <Image
        style={{ width:100, height:100}}
        source={{ uri: 'https://picsum.photos/200/200'}} />
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
  textOne: {
    color: '#ff0000'
  }
});
