import React, { useState } from "react";
import { View, Text, Image } from "react-native";
import { Card } from "react-native-paper";
import styles from "./CryptoCard.styles";
import { LineChart, Grid} from "react-native-svg-charts";
import * as shape from 'd3-shape';



// const [data, setData] = useState([]);
// const data

// fetch("https://assets-api.sylo.io/v2/asset/id/0xf293d23bf2cdc05411ca0eddd588eb1977e8dcd4:mainnet:ethereum/rate?fiat=NZD&period=week&type=historic")
// .then(response => response.json())
// .then(response => data = response.history);



export default class CryptoCard extends React.Component {

    constructor(props) {
        super()
        this.state = {
            name: props.name,
            logo: props.logo,
            id: props.id,
            rate: "",
            change: "+4.48%($0.0097)",
            graphData: []

        }
    }

    componentDidMount() {
        fetch("https://assets-api.sylo.io/v2/asset/id/" + this.state.id + "/rate?fiat=NZD&period=week&type=historic")
            .then(response => response.json())
            .then(json => {
                // if(json.rate > )
                json.history.map(i => {
                    this.state.graphData.push(i.rate)
                }) 
                    
                this.setState({
                    rate: json.rate
                })
            })
            .catch(e => console.log(e));
    }

    

    render() {
        return(
            <Card style={styles.containerStyle}>
                {/* Child 1, summary view */}
                <View style={styles.summaryView}>
                    {/* Logo and name */}
                    <View style={{flexDirection: "row", flex: 1}}>
                        <Image style={styles.logoStyle} source={{uri: this.state.logo}}/>
                        <Text style={styles.nameStyle}> {this.state.name} </Text>
                    </View>
                    <View style={{flex: 1, alignItems: "flex-end"}}> 
                        <Text style={[styles.priceStyle, {width: 60, height:21}]}> {this.state.rate} </Text>
                        <Text style={[styles.priceStyle, {fontSize:12, marginTop: 0, color: "#33BB5D"}]}> {this.state.change} </Text>
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
        )
    }

}

