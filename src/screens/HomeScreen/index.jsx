import React from 'react';

import cryptocurrencies from "../../../assets/data/cryptocurrencies.json"
import { StyleSheet, Text, View, Image,FlatList } from "react-native";
import CoinItem from '../../components/CoinItem';

const HomeScreen = () =>{
return(
    <FlatList data={cryptocurrencies}
renderItem={({item})=>
<CoinItem marketCoin={item}/>
}
/>
)
}
export default HomeScreen