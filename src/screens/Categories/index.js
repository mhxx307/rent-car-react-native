import { FlatList, Image, ScrollView, Text, View } from 'react-native';
import { useContext, useState } from 'react';

import Button from '~/components/Button';
import CarItem from '~/components/CarItem';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import COLORS from '~/components/Colors';
import styles from './styles';
import { CarContext } from '~/store/Context';

function Categories() {
    const { cars, brands } = useContext(CarContext);
    const [searchValue, setSearchValue] = useState('');
    console.log(searchValue);

    return (
        <View style={styles.container}>
            <ScrollView>
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
                            <Text
                                style={{ ...styles.title, color: COLORS.black }}
                            >
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

export default Categories;
