import React, { useEffect,useState } from "react";

import { AntDesign, EvilIcons, Ionicons,FontAwesome } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from "react-native";
import styles from "./styles";

import CoinDetailHeader from "./components/CoindDetailHeader";
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from "@rainbow-me/animated-charts";
import {
  getDetailedCoinData,
  getCoinMarketChart,
} from "../../services/requests";

import { useRoute } from "@react-navigation/native";


const CoinDetailedScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  const route = useRoute();
  const {
    params: { coinId },
  } = route;
  console.log(coinId);
  const [coin, setCoin] = useState(null);
  const [coinMarketData, setCoinMarketData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [coinValue, setCoinValue] = useState("1");
  const [usdValue, setUsdValue] = useState("");

  

  

  const fetchCoinData = async () => {
    setLoading(true);
    const fetchCoinData = await getDetailedCoinData(coinId);
    const fetchCoinMarketData = await getCoinMarketChart(coinId);
    setCoin(fetchCoinData);
    setCoinMarketData(fetchCoinMarketData);
    setUsdValue(fetchCoinData.market_data.current_price.usd.toString()); 
    setLoading(false);
  };
  useEffect(() => {
    fetchCoinData();
  }, []);

  if (loading || !coin || !coinMarketData) {
    return <ActivityIndicator size="large" />;
  }
  const {
    image: { small },
    name,
   id,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    symbol,
  } = coin;

  const { prices } = coinMarketData;

  const formatCurrency = (value) => {
    "worklet";
    if (value === "") {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value).toFixed(2)}`;
  };

  const changeCoinValue = (value) => {
    setCoinValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setUsdValue((floatValue * current_price.usd).toString());
  };

  const changeUsdValue = (value) => {
    setUsdValue(value);
    const floatValue = parseFloat(value.replace(",", ".")) || 0;
    setCoinValue((floatValue / current_price.usd).toString());
  };
  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ChartPathProvider
        data={{
          points: prices.map(([x, y]) => ({ x, y })),
          smoothingStrategy: "bezier",
        }}
      >
        <CoinDetailHeader
          image={small}
          symbol={symbol}
          marketCapRank={market_cap_rank}
          coinId={id}
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
            <ChartYLabel
              format={formatCurrency}
              style={{ color: "white", fontSize: 25, fontWeight: "500" }}
            />
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
              color={"white"}
              style={{ alignItems: "center", marginRight: 10 }}
            />
            <Text style={{ color: "white", fontSize: 17, fontWeight: "500" }}>
              {price_change_percentage_24h.toFixed(2)}%
            </Text>
          </View>
        </View>

        <ChartPath
          height={screenWidth / 2}
          stroke="yellow"
          width={screenWidth}
        />
        <ChartDot style={{ backgroundColor: "blue" }} />


        <View style={{ flexDirection: "row" }}>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType="numeric"
              onChangeText={changeCoinValue}
            />
          </View>

          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ color: "white", alignSelf: "center" }}>USD</Text>
            <TextInput
              style={styles.input}
              value={usdValue}
              keyboardType="numeric"
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};
export default CoinDetailedScreen;
