import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function AppScreen()
{
    const router = useRouter();
    return (
        <View>
            <Text>
                Você está na Index
            </Text>
            <Button title='Ir para Personagens' onPress={() => router.push(`/personagens/`)}/>
        </View>
    );
};