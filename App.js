import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image,FlatList } from "react-native";
import CoinDetailedScreen from "./src/screens/CoinDetailedScreen";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/navigation";
import WatchlistProvider from "./src/Contexts/WatchlistContext";


export default function App() {
  return (
    <WatchlistProvider>
    <NavigationContainer theme={{
      colors:{
        background:'#121212'
      }
    }}>
    <View style={styles.container}>
  <Navigation/>
   
    </View>
    </NavigationContainer>
    </WatchlistProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    paddingTop: 30,
    
  }})