import React, { useEffect, useState } from 'react';
import { View, SafeAreaView } from 'react-native';
import CryptoCardsList from "../../components/CryptoCardsList/CryptoCardsList";
import styles from "./MainScreen.styles"
import AppBar from "../../components/AppBar/AppBar"



export default function MainScreen(props) {

  const getAssets = "https://assets-api.sylo.io/v2/all?take=30&has_history_only=true"


  const[loading, setLoading] = useState(true);
  const[assets, setAssets] = useState([]);
  

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal

    fetch(getAssets, {signal: signal})
    .then(response => response.json())
    .then(json => {
        setAssets(json)
        setLoading(false);
    })
    .catch(e => console.log(e))

    return function cleanup() {
      abortController.abort()
    }
  })

  if (loading) {
    return null;
  } else {
    return ( 
      <SafeAreaView style={styles.container}>
        
        <AppBar screen="main"/>

        <View style={{flex:3}}>
          <CryptoCardsList navigation={props.navigation} assets={assets}/>
        </View>
      </SafeAreaView>  
    );
  }

}
