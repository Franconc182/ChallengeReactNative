import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';
import { useEffect, useState } from 'react';
import axios from "axios";

export default function App() {
  const [cat, setCat] = useState();

  const handleSubmit = (e) =>{
    axios.get("https://some-random-api.ml/animal/cat")
    .then((res) =>{
    setCat(res);
    });
  }

  useEffect(() =>{ 
    handleSubmit()
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
      <Text>{cat?.data.fact}</Text>
      <Image source={{ uri: `${cat?.data.image}`}} style={{ width: 200, height: 200, borderRadius: 10, margin: 20}} />
      <TouchableHighlight onPress={handleSubmit}>
        <View style={styles.button}>
          <Text style={styles.text}>Next fact</Text>
        </View>
      </TouchableHighlight>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d3d3d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerContent:{
    borderRadius: 20,
    padding: 20,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    width: 300,
    height: 370,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'blue',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
