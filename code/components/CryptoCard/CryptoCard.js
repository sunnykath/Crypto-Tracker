import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styles from "./CryptoCard.styles";
import { LineChart, Grid} from "react-native-svg-charts";
import * as shape from 'd3-shape';
import { TouchableOpacity } from "react-native-gesture-handler";

export default class CryptoCard extends React.Component {

    constructor(props) {
        super()
        this.state = {
            item: props.item,
            name: props.item.name,
            logo: props.item.icon_address_dark,
            id: props.item.id,
            graphData: [],
            rate: "",
            navigation: props.navigation
        }
        
    }

    componentDidMount() {

        const abortController = new AbortController()
        const signal = abortController.signal               

        fetch("https://assets-api.sylo.io/v2/asset/id/" + this.state.id + "/rate?fiat=NZD&period=hour&type=historic", {signal: signal})
            .then(response => response.json())
            .then(json => {
                json.history.map(i => {
                    this.state.graphData.push(i.rate)
                }) 
                    
                this.setState({
                    assestHistorty: json,
                    rate: json.rate
                })
            })
            .catch(e => console.log(e));
        return function cleanup() {
            abortController.abort()
        }
    }

    render() {
        return(

            <TouchableOpacity onPress={() => {this.state.navigation.navigate("details", ([this.state.assestHistorty, this.state.graphData, this.state.item]))}}>
                <Card style={styles.containerStyle}>
                    {/* Child 1, summary view */}
                    <View style={styles.summaryView}>
                        {/* Logo and name */}
                        <View style={{flexDirection: "row", flex: 1}}>
                            <Image style={styles.logoStyle} source={{uri: this.state.logo}}/>
                            <Text style={styles.nameStyle}> {this.state.name} </Text>
                        </View>
                        <View style={{flex: 1, alignItems: "flex-end"}}> 
                            <Text style={[styles.priceStyle, {width: 60, height:21}]}> ${this.state.rate} </Text>
                            <Text style={[styles.priceStyle, {fontSize:12, marginTop: 0, color: "#33BB5D"}]}> +1.79% ($4.88) </Text>
                        </View>
                    </View>

                    {/* Child 2, Graph view */}
                    <View style={{flex:3}}>
                    <LineChart
                            data={this.state.graphData}
                            style={{width: 353, height: 66}}
                            curve={shape.curveBasis}
                            svg={{ stroke: "rgba(241,90,41,0.8)", strokeWidth: 3}}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                        </LineChart>
                    </View>
                </Card>
            </TouchableOpacity>
            
        )
    }

}

