import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import CryptoCard from "../../components/CryptoCard/CryptoCard";
import CryptoCardsList from "../../components/CryptoCardsList/CryptoCardsList";
// import NavBar from "../../components/NavBar/NavBar";



export default function MainScreen() {

  const getAssets = "https://assets-api.sylo.io/v2/all?take=30&has_history_only=true"


  const[loading, setLoading] = useState(true);
  const[assets, setAssets] = useState([]);
  

  useEffect(() => {
    
    fetch(getAssets).then(response => response.json())
    .then(json => {
        setAssets(json)
        setLoading(false);
    })
    .catch(e => console.log(e))

  })

  if (loading) {
    return null;
  } else {
    return ( 
      <SafeAreaView style={styles.container}>
        {/* <View style={{alignItems:"center", flex: 2}}>
          <Text style={{color:"rgb(255,255,255)"}}> Tracker </Text>
        </View> */}
        {/* <View style={{flex:2}}>
          <NavBar />
        </View> */}
        

        <View style={{flex:3}}>
          <CryptoCardsList assets={assets}/>
        </View>
      </SafeAreaView>  
    );
  }

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
