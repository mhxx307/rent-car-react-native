import { FlatList, Text, View } from 'react-native';
import { useState } from 'react';

import Button from '~/components/Button';
import CarItem from '~/components/CarItem';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import COLORS from '~/components/Colors';
import styles from './styles';

function Categories() {
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
        {
            id: 6,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
        {
            id: 7,
            name: 'BMW',
            cost: 40,
            type: 'Sport',
            rate: 5,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7fSApsPYgNsCQxRbEtTJSbbUVCaVOgFck8TL2iwNJDg&s',
        },
    ];
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);

    return (
        <View style={styles.container}>
            <DefaultLayout
                headerText="Categories"
                headerStyle={{ paddingLeft: 20 }}
            >
                <View style={styles.content}>
                    <Search
                        height={60}
                        style={{ marginTop: 20 }}
                        value={searchValue}
                        onChangeText={(text) => setSearchValue(text)}
                        onPressSearch={() => console.log('search')}
                        onPressFilter={() => console.log('filter')}
                    />
                    <View style={styles.brandWrapper}>
                        <Text style={{ ...styles.title, color: COLORS.black }}>
                            Brands
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
        </View>
    );
}

export default Categories;
