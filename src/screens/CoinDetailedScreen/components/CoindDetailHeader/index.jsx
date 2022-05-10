import React from 'react'
import styles from './style';
import { View, Text, Image ,StyleSheet} from "react-native";
import { AntDesign, EvilIcons,Ionicons } from '@expo/vector-icons'

const CoinDetailHeader = (props) =>{
    const { image, symbol, marketCapRank } = props;
    return(
        <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>

    )
}
export  default CoinDetailHeader