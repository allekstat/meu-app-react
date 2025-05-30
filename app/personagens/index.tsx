import { useRouter } from "expo-router";
import React from "react";
import { Button, Text, View } from "react-native";

export default function AppScreen()
{
    const router = useRouter();
    return (
        <View>
            <Text>
                Lista de Personagens
            </Text>
            <Button title='Ver Personagem 1' onPress={() => router.push(`/personagens/${1}`)}/>
        </View>
    );
};