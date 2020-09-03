//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import FlipCard from 'react-native-flip-card';

export default function App() {
  const [text,setText] = useState("");
  const [text2,setText2] = useState("");
  return (
    <View style={styles.container}>
      <Text>Uygulama çalışıyor</Text>
      <TextInput placeholder="add word" onChangeText={text => setText(text)} defaultValue={text}/>
      <TextInput placeholder="add word" onChangeText={text => setText2(text)} defaultValue={text2}/>
      <Text>{text}</Text>
      <FlipCard
        style={styles.card}
        friction={6}
        perspective={1000}
        flipHorizontal={true}
        flipVertical={false}
        flip={false}
        clickable={true}
        onFlipEnd={(isFlipEnd) => { console.log('isFlipEnd', isFlipEnd) }}
      >
        {/* Face Side */}
        <View style={styles.card1}>
          <Text>The Face</Text>
        </View>
        {/* Back Side */}
        <View style={styles.card2}>
          <Text>The Back</Text>
        </View>
      </FlipCard>

      {/*<StatusBar style="auto" /> */}
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
  cardContainer: {
    width: 320,
    height: 470,
  },
  card: {
    flex: 1,
    marginTop: 10,
    width: 100,
    height: 0,
    borderRadius: 20,
    backgroundColor: '#FE474C',
    shadowColor: 'rgba(0,0,0,0.5)',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.5,
  },
  card1: {
    flex: 1,
    left:0,
    backgroundColor: '#FE474C',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card2: {
    flex: 1,
    left:0,
    backgroundColor: '#FEB12C',
    //backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
