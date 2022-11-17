import { FlatList, Text, View } from 'react-native';
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
    return (
        <DefaultLayout CustomHeader={<Menu style={styles.menu} />}>
            <View style={styles.content}>
                <Search height={70} />
                <Banner />
                <View style={styles.brandWrapper}>
                    <Text style={{ ...styles.title, color: COLORS.black }}>
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
                ListFooterComponent={<View style={{ height: 270 }} />}
                ListHeaderComponent={<View style={{ height: 40 }} />}
                numColumns={2}
            />
        </DefaultLayout>
    );
}

export default Home;
