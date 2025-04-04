import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen(){
    const [count, setCount] = useState(0);

    return (
        <View style={{flex: 1, backgroundColor: "gold"}}>
            <CustomButton title="Name"/>
            <Text>Bem vindo</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(0)}}/>
        </View>   
    );
};