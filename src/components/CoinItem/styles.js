import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      paddingTop: 30,
      flexDirection: "row",
    },
    title: {
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
    },
    text: {
      color: "white",
      marginRight: 5,
    },
    coincontainer: {
      flexDirection: "row",
      borderBottomWidth: 0.5,
      borderBottomColor: "#282828",
      padding: 15,
    },
    rank:{
      fontWeight:'bold',
      color:'white',
      marginRight:5,
      
    },
    rankContainer:{
      backgroundColor:'#585858',
      paddingHorizontal:5,
      borderRadius:5,
      marginRight:5
    }
  });

  export default styles