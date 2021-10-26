import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useSelector } from "react-redux";

export default function ViewCart() {
  const items = useSelector((state) => state.cartReducer.selectedItems.items);
  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalStr = `$${total.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`


  console.log(totalStr);

  return (
    <>
      {total ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: 45,
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                borderRadius: 30,
                width: 300,
                position: "relative",
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 10,
              }}
            >
              <Text style={{ color: "white", fontSize: 20, marginRight: 30, }}>View Cart</Text>
              <Text style={{ color: "white", fontSize: 20, marginRight: 10 }}>{totalStr}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
    </>
  );
}
