import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import Feed from '../Apresent/Apresent';
import New from '../../screens/New';
import Fotos from '../../screens/Fotos';
// import Cadastro from '../Cadastro/Cadastro';

const Tab = createBottomTabNavigator();

//<Tab.Navigator screenOptions={ {headerShown: false} }>

export default function TabRoutes() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Apresent"
                component={Feed}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    tabBarLabel: 'Inicio'//texto do botão <Feather name="home" tipo de botão
                }}
            />

            <Tab.Screen
                name="new"
                component={New}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'API'
                }}

            />
            <Tab.Screen
                name="fotos"
                component={Fotos}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="book" color={color} size={size} />,
                    tabBarLabel: 'Fotos'
                }}

            />
        </Tab.Navigator>
    )
}