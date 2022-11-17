import { Text, View } from 'react-native';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Menu from '~/components/Menu';
import styles from './styles';

function Home() {
    return (
        <DefaultLayout CustomHeader={<Menu />}>
            <View style={styles.Content}>
                <Text>Content</Text>
            </View>
        </DefaultLayout>
    );
}

export default Home;
