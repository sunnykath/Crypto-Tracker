import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    containerStyle: {
        // flex: 1,
        // justifyContent: "flex-end",
        alignItems: "center",
        // backgroundColor: "rgb(255, 0, 0)",
        padding: 2,
        marginTop: 100,
        width: 335,
        height: 185,
        borderRadius: 15,
        overflow: "hidden"
    },

    logoStyle: {
        height: 36,
        width: 36,
        marginTop: 9,
        marginStart: 14,
    },

    priceStyle: {
        marginTop: 10,
        fontSize: 15,
        marginEnd: 15,
    },

    nameStyle: {
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

