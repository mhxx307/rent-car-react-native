import { useContext } from 'react';
import {
    Dimensions,
    FlatList,
    Image,
    ScrollView,
    Text,
    View,
} from 'react-native';
import Banner from '~/components/Banner';
import Button from '~/components/Button';
import CarItem from '~/components/CarItem';
import COLORS from '~/components/Colors';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Menu from '~/components/Menu';
import Search from '~/components/Search';
import { CarContext } from '~/store/Context';
import styles from './styles';

function Home() {
    const height = Dimensions.get('window').height;

    const { cars, brands } = useContext(CarContext);

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
            <ScrollView>
                <DefaultLayout CustomHeader={<Menu style={styles.menu} />}>
                    <View style={styles.content}>
                        <Search height={70} style={{ marginBottom: 30 }} />
                        <Banner />
                    </View>

                    <View style={styles.brandWrapper}>
                        <Text
                            style={{
                                ...styles.title,
                                color: COLORS.black,
                                marginBottom: 10,
                            }}
                        >
                            Popular car brands
                        </Text>
                        <FlatList
                            data={brands}
                            renderItem={({ item }) => (
                                <Button
                                    style={{
                                        ...styles.item,
                                        backgroundColor: COLORS.white,
                                    }}
                                >
                                    <Image
                                        source={{ uri: item.img }}
                                        style={{ width: 60, height: 60 }}
                                    />
                                </Button>
                            )}
                            keyExtractor={(item) => item.id}
                            horizontal={true}
                        />
                    </View>

                    <FlatList
                        data={cars}
                        renderItem={({ item }) => <CarItem car={item} />}
                        keyExtractor={(item) => item.id}
                        columnWrapperStyle={{
                            justifyContent: 'space-between',
                            marginBottom: 20,
                            marginHorizontal: 20,
                        }}
                        ListHeaderComponent={<View style={{ height: 40 }} />}
                        numColumns={2}
                    />
                </DefaultLayout>
            </ScrollView>
        </View>
    );
}

export default Home;
