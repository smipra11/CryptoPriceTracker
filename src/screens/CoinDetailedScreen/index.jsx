import React from "react";

import { AntDesign, EvilIcons, Ionicons } from "@expo/vector-icons";
import { View, Text, Image, StyleSheet,Dimensions } from "react-native";
import styles from "./styles";
import Coin from "../../../assets/data/crypto.json";
import CoinDetailHeader from "./components/CoindDetailHeader";
import {ChartDot, ChartPath, ChartPathProvider,ChartYLabel, } from '@rainbow-me/animated-charts';

const CoinDetailedScreen = () => {
  const {
    image: { small },
    name,
    prices,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    symbol,
  } = Coin;
  const  screenWidth= Dimensions.get('window').width

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
   
      <ChartPathProvider data={{ points:prices.map(([x,y]) =>({x,y})), smoothingStrategy: 'bezier' }}>
      <CoinDetailHeader
        image={small}
        symbol={symbol}
        marketCapRank={market_cap_rank}
      />
      <View
        style={{
          padding: 15,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View>
          <Text style={{ color: "white", fontSize: 15 }}>{name}</Text>
          <ChartYLabel format={formatCurrency} style={{color:'white',fontSize:25,fontWeight:'500'}} />
          
        </View>
        <View
          style={{
            backgroundColor: "red",
            padding: 5,
            borderRadius: 5,
            flexDirection: "row",
          }}
        >
          <AntDesign
            name={price_change_percentage_24h < 0 ? "caretdown" : "caretup"}
            size={12}
            color={'white'}
            style={{alignItems:'center',marginRight:10}}
          />
          <Text style={{ color: "white", fontSize: 17, fontWeight: '500' }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      
      
      <ChartPath height={screenWidth / 2} stroke="yellow" width={screenWidth} />
      <ChartDot style={{ backgroundColor: 'blue' }} />
    </ChartPathProvider>
    </View>
  );
};
export default CoinDetailedScreen;
