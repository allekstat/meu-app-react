import { Slot, Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
export default function Layout()
{
    return (
        <Tabs screenOptions = {{tabBarActiveTintColor : 'blue'}}>
            <Tabs.Screen name = 'index' options = {{title : 'INÍCIO' , tabBarIcon : ({color , size}) => <Ionicons name = 'home-outline' size = {size} color = {color}/>}}/>
            <Tabs.Screen name = 'explore' options = {{title : 'EXPLORAR' , tabBarIcon : ({color , size}) => <Ionicons name = 'compass-outline' size = {size} color = {color}/>}}/>
            <Tabs.Screen name = 'profile' options = {{title : 'PERFIL' , tabBarIcon : ({color , size}) => <Ionicons name = 'at-outline' size = {size} color = {color}/>}}/>
            <Tabs.Screen name = 'about' options = {{title : 'SOBRE' , tabBarIcon : ({color , size}) => <Ionicons name = 'information-outline' size = {size} color = {color}/>}}/>
            <Tabs.Screen name = 'settings' options = {{title : 'CONFIGURAÇÕES' , tabBarIcon : ({color , size}) => <Ionicons name = 'settings-outline' size = {size} color = {color}/>}}/>
        </Tabs>
    );
}