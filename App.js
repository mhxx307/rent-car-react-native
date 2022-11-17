import { NavigationContainer } from '@react-navigation/native';
import MyTabs from '~/components/MyTabs';
import Provider from '~/store/Provider';

function App() {
    return (
        <NavigationContainer>
            <MyTabs />
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
