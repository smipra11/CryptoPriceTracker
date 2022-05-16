import React from 'react'
import styles from './style';
import { View, Text, Image ,StyleSheet} from "react-native";
import { AntDesign, EvilIcons,Ionicons,FontAwesome } from '@expo/vector-icons'
import { useNavigation } from "@react-navigation/native";
import { useWatchlist } from '../../../../Contexts/WatchlistContext';



const CoinDetailHeader = (props) =>{
    const { image, symbol, marketCapRank,coinId } = props;
    const navigation = useNavigation();
    const { watchlistCoinIds, storeWatchlistCoinId, removeWatchlistCoinId } = useWatchlist();
    
    const checkIfCoinIsWatchlisted = () =>
    watchlistCoinIds.some((coinIdValue) => coinIdValue === coinId);

  const handleWatchlistCoin = () => {
    if (checkIfCoinIsWatchlisted()) {
      return removeWatchlistCoinId(coinId)
    }
    return storeWatchlistCoinId(coinId)
  };
    
    return(
        <View style={styles.headerContainer}>
      <Ionicons name="chevron-back-sharp" size={30} color="white"  onPress = {()=>navigation.goBack()}/>
      <View style={styles.tickerContainer}>
        <Image source={{ uri: image }} style={{ width: 25, height: 25 }} />
        <Text style={styles.tickerTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: "white", fontWeight: "bold", fontSize: 15 }}>
            #{marketCapRank}
          </Text>
        </View>
      </View>
      <FontAwesome
        name={checkIfCoinIsWatchlisted() ? "star" : "star-o"}
        size={25}
        color={checkIfCoinIsWatchlisted() ? "#FFBF00" : "white"}
        onPress={handleWatchlistCoin}
      />
    </View>

    )
}
export  default CoinDetailHeader