import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Card, DataTable } from "react-native-paper";
import { LineChart, Grid, AreaChart} from "react-native-svg-charts";
import { Defs, LinearGradient, Stop } from "react-native-svg";
import * as shape from 'd3-shape';
import styles from "./DetailedScreen.styles";
import AppBar from "../../components/AppBar/AppBar";



export default function DetailedScreen(props) {

    const {params} = props.navigation.state;

    const Gradient = () => (
        <Defs key={'gradient'}>
            <LinearGradient id={'gradient'} x1={'0'} y1={'0%'} x2={'0%'} y2={'100%'} >
            <Stop offset={'0%'} stopColor={"rgb(247,156,127)"} stopOpacity={0.2}/>
            <Stop offset={'100%'} stopColor={'rgb(0,0,0)'} stopOpacity={1}/>
            </LinearGradient>
        </Defs>
    )

    
    return (

        <View style={{backgroundColor: "#000", flex:1}}>
            {/* AppBar */}

            <AppBar screen="details" name={params[2].name} logo={params[2].icon_address_dark} navigation={props.navigation}/>

            {/* Ghraph View */}
            <View style={{alignItems: "center"}}>
                <Card style={styles.cardStyle}>
                    {/* Child 1, grapd card */}
                    <View style={styles.graphCard}>
                        <View style={{flex: 1, alignItems: "center"}}> 
                            <Text style={[styles.priceStyle, {width: 60, height:21}]}>${params[0].rate}</Text>
                            <Text style={[styles.priceStyle, {fontSize:12, marginTop: 0, color: "#33BB5D"}]}> +1.79% ($4.88) </Text>
                        </View>
                    </View>

                    {/* Child 2, Graph view */}
                    <View style={{flex:3}}>
                    <AreaChart
                            data={params[1]}
                            style={{width: 345, height: 117}}
                            curve={shape.curveBasis}
                            svg={{ 
                                stroke: "#F15A29",
                                strokeWidth: 3,
                                fill: "url(#gradient)",
                                // fillOpacity: "0.3" 
                            }}
                            contentInset={{ top: 20, bottom: 20 }}
                        >
                            <Gradient/>
                        </AreaChart>
                    </View>
                </Card>
            </View>
            
            {/* Information */}
            <View style={{alignItems: "center", marginTop:31}}>
                <Text style={{fontSize: 15, marginBottom:12, color: "#fff"}}> Information </Text>
                <DataTable >
                    <DataTable.Row>
                        <DataTable.Cell>
                            <Text style={styles.cell}>Symbol:</Text> 
                        </DataTable.Cell>
                        <DataTable.Cell> 
                            <Text style={styles.cell}> {params[2].symbol} </Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell> 
                            <Text style={{color: "#646464"}}>Markert Cap: </Text>
                        </DataTable.Cell>
                        <DataTable.Cell>
                          <Text style={styles.cell}> ${params[0].market_cap.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NZD </Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                    <DataTable.Row>
                        <DataTable.Cell>
                            <Text style={styles.cell}>24 Volume:</Text>
                        </DataTable.Cell>
                        <DataTable.Cell> 
                            <Text style={styles.cell}> ${params[0].volume_24h.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} NZD </Text>
                        </DataTable.Cell>
                    </DataTable.Row>
                </DataTable>
            </View>

        </View>

    )
    

}