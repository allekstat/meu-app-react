import CustomButton from "@/components/CustomButton";
import CustomForm from "@/components/CustomForm";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function HomeScreen(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Alexsander");

    return (
        <View style={{flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "gold"}}>
            <Text>Bem vindo</Text>
            <Text>Contador: {count}</Text>
            <Text>Olá {name}</Text>


            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(0)}}/>


            <TextInput style={styles.TextInput} placeholder="Digite seu Nome" onChangeText={setName}/>
            <input type="date"/>
            <CustomButton title="Alexsander" onPress={() => setName(name + " " + count)}/>




            <CustomForm style={{backgroundColor: "cyan"}}/>
        </View>   
    );
};

const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: "white",
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 10,
        padding: 8,
        margin: 5
    }
});
