import { useRouter } from "expo-router";
import { Button, View } from "react-native";
export default function OptionsScreen()
{
    const router = useRouter();
    return (
        <View>
            Estou em Options
            <Button title='ir para detalhes' onPress={() => router.push('/navigation/stack/details')}/>
        </View>
    );
};