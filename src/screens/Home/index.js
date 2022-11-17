import { Dimensions, FlatList, Text, View } from 'react-native';
import Banner from '~/components/Banner';
import Button from '~/components/Button';
import CarItem from '~/components/CarItem';
import COLORS from '~/components/Colors';

import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Menu from '~/components/Menu';
import Search from '~/components/Search';
import styles from './styles';

function Home() {
    // mock brands and cars data
    const brands = ['BMW', 'NISSAN', 'TOYOTA', 'MAZDA', 'AUDI', 'FORD'];
    const cars = [
        {
            id: 1,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
        {
            id: 2,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
        {
            id: 3,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
        {
            id: 4,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
        {
            id: 5,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
    ];
    const height = Dimensions.get('window').height;

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.white }}>
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
                                <Text>{item}</Text>
                            </Button>
                        )}
                        keyExtractor={(item) => item}
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
                    ListFooterComponent={
                        <View style={{ height: height - 150 }} />
                    }
                    ListHeaderComponent={<View style={{ height: 40 }} />}
                    numColumns={2}
                />
            </DefaultLayout>
        </View>
    );
}

export default Home;
