import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import WelcomeScreen from "../screens/WelcomeScreen";
import PersonajesScreen from "../screens/PersonajesScreen";
import ListaScreen from "../screens/ListaScreen";
import LoginScreen from "../screens/LoginScreen";
import { NavigationContainer } from "@react-navigation/native";
import Lista2Screen from "../screens/Lista2Screen";

// TAB
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Welcome" component={WelcomeScreen} />
      <Tab.Screen name="Personaje" component={PersonajesScreen} />
      <Tab.Screen name="Top" component={MyTop} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

// STACK
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Bottom" component={MyTabs} options={{ headerShown: true }} />
    </Stack.Navigator>
  );
}

const Top = createMaterialTopTabNavigator();

function MyTop() {
  return (
    <Top.Navigator>
      <Top.Screen name="Lista1" component={ListaScreen} />
      <Top.Screen name="Lista2" component={Lista2Screen} />
    </Top.Navigator>
  );
}

export default function Navegador() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
