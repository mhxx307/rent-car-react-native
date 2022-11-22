import { useContext } from 'react';
import { FlatList, Text, View } from 'react-native';
import CarItem from '~/components/CarItem';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import { CarContext } from '~/store/Context';
import styles from './styles';

function MyRent() {
    const { rentCars } = useContext(CarContext);

    return (
        <View style={styles.container}>
            <DefaultLayout
                headerText="My Rent"
                headerStyle={{ paddingLeft: 20 }}
            >
                <View style={{ padding: 20 }}>
                    <Search height={60} />
                </View>
                <View style={{ padding: 20 }}>
                    <FlatList
                        data={rentCars}
                        renderItem={({ item }) => (
                            <CarItem
                                car={item}
                                style={{ width: '100%', marginBottom: 10 }}
                                heightImage={200}
                                type2
                            />
                        )}
                        ListFooterComponent={<View style={{ height: 220 }} />}
                        keyExtractor={(item) => item.id}
                    />
                </View>
            </DefaultLayout>
        </View>
    );
}

export default MyRent;
