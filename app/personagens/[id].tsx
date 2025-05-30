import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";
export default function PersonagensId()
{
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Text>
                Detalhe: {id}
            </Text>
        </View>
    )
}