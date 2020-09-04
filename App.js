//import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, AsyncStorage } from 'react-native';
import FlipCard from 'react-native-flip-card';

export default function App() {
  const [text,setText] = useState("");
  const [text2,setText2] = useState("");
  const [open,setopen] = useState(true);
  if(open){
    return (
      <View style={styles.container}>
        <Text>Add Word App</Text>
        <Button style={styles.btn} title="Add" onPress={()=>{
          setopen(false)
           AsyncStorage.setItem("key", "value")
          }} />
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
  }else{
    return(
      <View style={styles.container}>
        <Text>Deneme</Text>
        <TextInput placeholder="add word" onChangeText={text => setText(text)} defaultValue={text}/>
        <TextInput placeholder="add word" onChangeText={text => setText2(text)} defaultValue={text2}/>
        <Button title="Add" onPress={()=>setopen(true)} />
        <Text>{AsyncStorage.getItem("key")}</Text>
      </View>
    )
  }
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
    width: 320,
    marginBottom: 10,
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
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card2: {
    flex: 1,
    left:0,
    backgroundColor: '#FEB12C',
    //backgroundColor: '#fff',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn:{
    flex: 1,
    alignItems: 'stretch',
    flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: "red"
  }
});
