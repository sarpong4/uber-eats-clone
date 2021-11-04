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
// require("dotenv").config();

const YELP_API_KEY =
  "o9i3FxX0Lf-li6oOSNPP6n1zv6lPVrBEffGcZATHfKZzkwGdCEjK455uEztZk5fsiNpAebpq_4ejNZolM2FuI_2TDmw8Pw95bdsx7A7FJsAE67XC40Gyc5X0pRCDYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("SanDiego");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [page, setPage] = useState("Home");

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
        <RestaurantItems
          restaurantData={restaurantData}
          navigation={navigation}
        />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs page={page} />
    </SafeAreaView>
  );
}

// Time stamp 1:39
