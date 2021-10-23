import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery")
    return (
        <View style={{ flexDirection:"row", alignSelf:"center" }}>
            <HeaderButton 
                text="Delivery"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
            />
            <HeaderButton 
                text="Pickup"
                activeTab={activeTab}
                setActiveTab={setActiveTab}
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