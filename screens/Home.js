import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Divider } from "react-native-elements/dist/divider/Divider";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";

const YELP_API_KEY =
  "mNGSMRW1wBIaWuyOr-q1_cBtMuPYbOU24hdsVEO8oLQ8aTQx67okpmhDbFEdztUnf4LyXEgi-1oYjiQ54IeH4qfDHU5mOtF7CEEmt5ASsLAPhcMczsU-T_hkFWR0YXYx";

export default function Home() {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Hollywood");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [page, setPage] = useState("Home")

  const getRestaurantsFromYelp = async () => {
    const yelpURL = `https://api.yelp.com/v3/businesses/search?term=restaurant&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return await fetch(yelpURL, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      );
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs page={page} />
    </SafeAreaView>
  );
}

// Time stamp 1:39
