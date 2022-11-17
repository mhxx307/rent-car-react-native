import { FlatList, Text, View } from 'react-native';
import CarItem from '~/components/CarItem';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import styles from './styles';

function MyRent() {
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
                        data={cars}
                        renderItem={({ item }) => (
                            <CarItem
                                car={item}
                                style={{ width: '100%', marginBottom: 10 }}
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
