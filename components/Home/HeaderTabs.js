import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs(props) {
    return (
        <View style={{ flexDirection:"row", alignSelf:"center" }}>
            <HeaderButton 
                text="Delivery"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
            <HeaderButton 
                text="Pickup"
                activeTab={props.activeTab}
                setActiveTab={props.setActiveTab}
            />
        </View>
    )
}

const HeaderButton = (props) => (
    <TouchableOpacity style={{
        backgroundColor: props.activeTab === props.text ? "black":"white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginTop: 30, // This portion is optional, depends on phone used for test
    }}
    onPress = {() => props.setActiveTab(props.text)}>
        <Text style={{
            color: props.activeTab === props.text ? "white" : "black",
            fontSize: 15,
            fontWeight: "900",
        }}>
            {props.text}
        </Text>
    </TouchableOpacity>
)