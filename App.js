import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Provider from '~/store/Provider';
import MyTabs from '~/components/MyTabs';
import { LoginScreen } from '~/screens';

function App() {
    const Stack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={LoginScreen} />
                <Stack.Screen name="Main" component={MyTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default () => {
    return (
        <Provider>
            <App />
        </Provider>
    );
};
