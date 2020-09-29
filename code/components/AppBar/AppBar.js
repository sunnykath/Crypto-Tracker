import React, { useEffect, useState } from 'react';
import { Appbar } from "react-native-paper";
import styles from "./AppBar.styles"
// import NavBar from "../../components/NavBar/NavBar";



export default function AppBar(props) {


    if (props.screen === "main") {
        return (

            <Appbar.Header style={styles.appBar}>
                {/* <Appbar.BackAction /> */}
                <Appbar.Action icon="dots-vertical" />
                <Appbar.Content title="Tracker" titleStyle={{alignSelf: "center"}}/>
                <Appbar.Action icon="magnify" />
            </Appbar.Header>

        )
    } else {
        return  (
            <Appbar.Header style={styles.appBar}>
                <Appbar.BackAction onPress={() => {props.navigation.navigate("main")}}/>
                {/* <Appbar.Action icon="dots-vertical" /> */}
                <Appbar.Action icon={{uri:props.logo}} style={{justifyContent: "center"}} />
                <Appbar.Content 
                    title={props.name} 
                    // titleStyle={{textAlign: "center"}}
                    /> 
                <Appbar.Action/>
            </Appbar.Header>
        )
    }
}