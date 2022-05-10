import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import styles from "./styles";

const CoinItem = ({ marketCoin }) => {
  const {
    name,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
    image,
  } = marketCoin;
  const percentageColor= price_change_percentage_24h <0 ?'#ea3943':'#16c784'
  return (
    <View style={styles.coincontainer}>
      <Image
        source={{
          uri: image,
        }}
        style={{ width: 30, height: 30, marginRight: 10 }}
      />
      <View>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name="caretdown"
            size={12}
            color={percentageColor}
            style={{ marginRight: 5 }}
          />
          <Text style={{color:percentageColor}}>{price_change_percentage_24h.toFixed(2)}</Text>
        </View>
      </View>
      <View style={{ marginLeft: 90 }}>
        <Text style={styles.title}> {current_price}</Text>
        <Text style={styles.text}> MCap {market_cap}</Text>
      </View>
    </View>
  );
};
export default CoinItem;
