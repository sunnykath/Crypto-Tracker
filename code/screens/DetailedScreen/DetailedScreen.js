import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import { LineChart, Grid, AreaChart} from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import * as shape from 'd3-shape';
import CryptoCard from "../../components/CryptoCard/CryptoCard";
import CryptoCardsList from "../../components/CryptoCardsList/CryptoCardsList";
import styles from "./DetailedScreen.styles";



const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

export default class DetailedScreen extends React.Component {

    constructor(props) {
        super()
        // this.setState({
        //     rate: props.rate,
        //     changed: props.changed,
        //     graphData: props.graphData,
        //     symbol: props.symbol,
        //     marketCap: props.marketCap,
        //     volume_24h: props.volume_24h

        // })
    }

    
    render() {
        

        const Gradient = () => (
            <Defs key={'gradient'}>
              <LinearGradient id={'gradient'} x1={'0'} y={'100%'} x2={'0%'} y2={'50%'}>
                <Stop offset={'0%'} stopColor={"rgb(247,156,127)"}/>
                <Stop offset={'100%'} stopColor={'white'}/>
              </LinearGradient>
            </Defs>
        )

        
        return (
        <View style={{alignItems: "center"}}>
            <Card style={styles.containerStyle}>
                {/* Child 1, summary view */}
                <View style={styles.summaryView}>
                    <View style={{flex: 1, alignItems: "flex-end"}}> 
                        <Text style={[styles.priceStyle, {width: 60, height:21}]}> "$2000" </Text>
                        <Text style={[styles.priceStyle, {fontSize:12, marginTop: 0, color: "#33BB5D"}]}> "$232323" </Text>
                    </View>
                </View>

                {/* Child 2, Graph view */}
                <View style={{flex:3}}>
                <LineChart
                        data={data}
                        style={{width: 345, height: 117}}
                        curve={shape.curveBasis}
                        svg={{ 
                            stroke: "rgba(247,156,127,1)",
                            strokeWidth: 3,
                            fill: "url(#gradient)",
                            // fillOpacity: "0.3" 
                        }}
                        contentInset={{ top: 20, bottom: 20 }}
                    >
                        <Gradient/>
                    </LineChart>
                </View>
            </Card>
        </View>
            

        )
    }

}