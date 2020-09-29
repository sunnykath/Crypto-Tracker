import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export default StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
      },


    appBar: {
        height: 65,
        width:Dimensions.get('window').width, 
        flexDirection: "row", 
        justifyContent:"space-around",
        backgroundColor: "#FFF"
    }

})