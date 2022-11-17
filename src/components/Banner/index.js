import { Text, Dimensions, StyleSheet, View } from 'react-native';
import { SwiperFlatList } from 'react-native-swiper-flatlist';

const Banner = ({ ...passProps }) => {
    const colors = ['tomato', 'thistle', 'skyblue', 'teal'];
    const props = {
        ...passProps,
    };
    return (
        <View style={styles.container} {...props}>
            <SwiperFlatList
                autoplay
                autoplayDelay={2}
                autoplayLoop
                index={2}
                showPagination
                paginationStyleItem={{ width: 10, height: 10 }}
                data={colors}
                renderItem={({ item }) => (
                    <View style={[styles.child, { backgroundColor: item }]}>
                        <Text style={styles.text}>{item}</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default Banner;

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        height: 200,
        borderRadius: 5,
        overflow: 'hidden',
    },
    child: {
        width,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: { fontSize: 25 },
});
