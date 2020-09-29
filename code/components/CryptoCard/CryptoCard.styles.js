import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    containerStyle: {
        backgroundColor: "rgb(0,0,0)",
        alignItems: "center",
        padding: 2,
        margin: 8,
        width: 343,
        height: 140,
        borderRadius: 15,
        borderColor: "rgba(255,255,255,0.2)",
        elevation: 0,
        borderWidth:1,
        overflow: "hidden"
    },

    logoStyle: {
        height: 36,
        width: 36,
        marginTop: 9,
        marginStart: 14,
    },

    priceStyle: {
        color: "#fff",
        marginTop: 10,
        fontSize: 15,
        marginEnd: 15,
    },

    nameStyle: {
        color: "#fff",
        fontSize: 15,
        // fontFamily: "RawlineSemiBold"
        marginLeft: 12,
        marginTop: 16
        
    },

    summaryView: {
        flexDirection: "row", 
        flex:2, 
        width: 343,
    }

})

