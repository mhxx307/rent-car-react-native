import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import React from 'react';

import { MarkIcon, StarIcon } from '~/components/Icons';
import img from '../../../assets/favicon.png';
import Button from '~/components/Button';

const windowWidth = Dimensions.get('window').width;

const CarItem = () => {
    return (
        <View style={styles.container}>
            <Button style={{ position: 'absolute', right: 5, top: 5 }}>
                <MarkIcon />
            </Button>
            <View style={styles.imgWrapper}>
                <Image source={img} style={{ height: 80, width: 80 }} />
            </View>
            <Button style={styles.carInfo}>
                <View>
                    <Text style={styles.nameCar}>Ford EcoSport</Text>
                    <Text style={styles.cost}>$40/day</Text>
                </View>
                <View style={styles.rating}>
                    <StarIcon />
                    <Text>5</Text>
                </View>
            </Button>
        </View>
    );
};

export default CarItem;

const styles = StyleSheet.create({
    container: {
        width: (windowWidth - 60) / 2,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
    },
    imgWrapper: {
        alignItems: 'center',
        marginBottom: 5,
    },
    carInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    nameCar: {
        color: '#eb9b34',
    },
    rating: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
