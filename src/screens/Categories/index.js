import { FlatList, Text, View } from 'react-native';
import Button from '~/components/Button';
import CarItem from '~/components/CarItem';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import styles from './styles';

const data = ['BMW', 'NISSAN', 'TOYOTA', 'MAZDA', 'AUDI', 'FORD'];

function Categories() {
    return (
        <View style={styles.container}>
            <DefaultLayout
                headerText="Categories"
                headerStyle={{ paddingLeft: 20 }}
            >
                <View style={styles.content}>
                    <Search height={60} style={{ marginTop: 20 }} />
                    <View style={styles.brandWrapper}>
                        <Text style={{ ...styles.title, color: 'black' }}>
                            Brands
                        </Text>
                        <FlatList
                            horizontal={true}
                            data={data}
                            renderItem={({ item }) => (
                                <Button>
                                    <Text style={styles.item}>{item}</Text>
                                </Button>
                            )}
                        />
                    </View>
                </View>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => <CarItem />}
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
