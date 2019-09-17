import React from 'react';
import { StyleSheet, Text, View, StatusBar, Button } from 'react-native';

export default function App() {

  pressed = (e) => {
    console.log("pressed")
  }

  return (
    <View style={styles.container}>
      <StatusBar 
        hidden={true}
        barStyle={"dark-content"}
        networkActivityIndicatorVisible={true} 
      />
      <View style={styles.ic1}>
        <Text>One</Text>
      </View>
      <View style={styles.icRow} >
        <View style={styles.ic2}>
          <Text>Two</Text>
        </View>
        <View style={styles.ic3}>
          <Text>Three</Text>
        </View>
      </View>
      <View style={styles.ic4}>
        <Text>Four</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // LayoutDirection Orientation (column, row)
    flexDirection: "column",
    backgroundColor: '#FFFFFF',
  },
  ic1: {
    backgroundColor: "#4444EE",
    flex: 1,
    padding: 20,
    color: "#FFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
    ic2: {
      backgroundColor: "#FFFF47",
      flex: 3,
      padding: 20
    },
    ic3: {
      backgroundColor: "#126947",
      flex: 1,
      padding: 20
  },
  ic4: {
    backgroundColor: "#EEAA47",
    flex: 1,
    padding: 20
  },
  icRow: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
  }
});
