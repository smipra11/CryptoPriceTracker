import React,{useContext} from 'react'
import {View,Text} from 'react-native'
import {WatchlistContext} from "../../Contexts/WatchlistContext"

const WatchList  = () =>{
    const {value} = useContext(WatchlistContext)
console.log(value)
return(
    <View>
        <Text> Watch list screen</Text>
    </View>
)
}
export default WatchList