import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({
    cardStyle: {
        backgroundColor: "#000",
        alignItems: "center",
        padding: 2,
        marginTop: 30,
        width: 335,
        height: 185,
        borderRadius: 15,
        overflow: "hidden",
        alignItems: "center",
        padding: 2,
        borderRadius: 15,
        borderColor: "rgba(255,255,255,0.2)",
        elevation: 0,
        borderWidth:1,
        overflow: "hidden"
    },

    priceStyle: {
        color: "#fff",
        marginTop: 10,
        fontSize: 18,
        marginEnd: 15,
    },

    cell: {
        color: "#646464"
    },

    graphCard: {
        flexDirection: "row", 
        flex:2, 
        width: 343,
    }

})

