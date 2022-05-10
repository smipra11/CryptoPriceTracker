import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,FlatList } from "react-native";
import CoinDetailedScreen from "./src/screens/CoinDetailedScreen";
import HomeScreen from "./src/screens/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
   
    <CoinDetailedScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 30,
    
  }})