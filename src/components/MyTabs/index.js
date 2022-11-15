import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import routes from '~/routes';

function MyTabs() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            {routes.map((route, index) => {
                return (
                    <Tab.Screen
                        key={index}
                        name={route.name}
                        component={route.component}
                        options={{ tabBarIcon: () => route.icon }}
                    />
                );
            })}
        </Tab.Navigator>
    );
}

export default MyTabs;
