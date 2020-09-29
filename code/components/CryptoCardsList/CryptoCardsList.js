import React, { Component, useState } from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Card } from "react-native-paper";
import styles from "./CryptoCardsList.styles";

import CryptoCard from "../CryptoCard/CryptoCard";




export default class CryptoCardsList extends React.Component {

    constructor(props) {
        super();
        this.state = {
          assets: props.assets,
          assetsHistory: [],
          loading: true,
          navigation: props.navigation
         };

    }

    

    render() {
        
        return(
            <View>
                <FlatList data={this.state.assets} 
                renderItem= {({item}) => (
                    <CryptoCard item={item} navigation={this.state.navigation}/>
                )
                } />
            </View>
        )
        
    }
}