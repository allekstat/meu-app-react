import React from "react";
import { Button, View } from "react-native";
import { useRouter } from "expo-router";
export default function SettingsScreen()
{
    const router = useRouter();
    return (
        <View>
            Hora de Configurar
            {/* <Button title = 'IR PARA AS OPÇÕES' onPress={() => router.push('/options')}/> */}
        </View>
    );
}