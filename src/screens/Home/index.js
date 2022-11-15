import { Text, View } from 'react-native';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Navbar from '~/components/Navbar';
import styles from './styles';

function Home() {
    return (
        <DefaultLayout CustomHeader={<Navbar />}>
            <View style={styles.Content}>
                <Text>Content</Text>
            </View>
        </DefaultLayout>
    );
}

export default Home;
