import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface Props
{
    title?: string,

    style?: {
        margin?: number,
        padding?: number,
        backgroundColor?: string,
        borderRadius?: number,
        borderWidth?: number
    }
}

export default function CustomForm({title, style}: Props)
{
    style = {...styles.View, ...style};

    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [cor, setCor] = useState("");
    const [mensagem, setMensagem] = useState("");

    if (!title) title = "Boa, o usuário [${usuario}] logou usando a senha[${senha}] dizendo que sua cor favorita é [${cor}]!!!";
    return (
        <View style={style}>
            <TextInput placeholder="Usuário" onChangeText={setUsuario}/>
            <TextInput placeholder="Senha" onChangeText={setSenha}/>
            <TextInput placeholder="Cor favorita" onChangeText={setCor}/>
            <CustomButton title="Entrar" onPress={() => setMensagem(eval(`\`${title}\``))}/>
            <Text>{mensagem}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        margin: 4,
        padding: 2,
        backgroundColor: "white",
        borderRadius: 4,
        borderWidth: 2
    }
});