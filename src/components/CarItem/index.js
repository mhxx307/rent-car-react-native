import { Image, Text, View } from 'react-native';

import { MarkIcon, StarIcon } from '~/components/Icons';
import Button from '~/components/Button';
import COLORS from '~/components/Colors';
import { useContext } from 'react';
import { CarContext } from '~/store/Context';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const CarItem = ({
    car,
    type2 = false,
    style = {},
    widthImage = '100%',
    heightImage = 80,
}) => {
    const { setSavedCars } = useContext(CarContext);
    const handleSaved = () => {
        if (!car.saved) {
            car.saved = true;
            setSavedCars((prev) => [...prev, car]);
        } else if (car.saved) {
            car.saved = false;
            setSavedCars((prev) => prev.filter((item) => item.id !== car.id));
        }
    };
    const navigation = useNavigation();
    return (
        <View
            style={[
                { ...styles.container, backgroundColor: COLORS.white },
                style,
            ]}
        >
            <Button
                style={{ position: 'absolute', right: 5, top: 5 }}
                onPress={() => {
                    handleSaved();
                }}
            >
                <MarkIcon
                    style={
                        car.saved
                            ? { backgroundColor: COLORS.starColor }
                            : { backgroundColor: COLORS.white }
                    }
                />
            </Button>
            {type2 && (
                <View style={{ position: 'absolute', left: 5, top: 5 }}>
                    <Text
                        style={{
                            color: COLORS.primary,
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                        }}
                    >
                        {car.name}
                    </Text>
                    <Text>{car.type}</Text>
                </View>
            )}
            <Button
                style={styles.imgWrapper}
                onPress={() => {
                    navigation.navigate('CarDetail', { car: car });
                }}
            >
                <Image
                    source={{ uri: car.img }}
                    style={{ height: heightImage, width: widthImage }}
                />
            </Button>
            <Button style={styles.carInfo}>
                {!type2 && (
                    <View>
                        <Text style={styles.carName}>{car.name}</Text>
                        <Text style={styles.cost}>${car.cost}/day</Text>
                    </View>
                )}
                {type2 ? (
                    <Text
                        style={{
                            ...styles.cost,
                            position: 'absolute',
                            right: 0,
                            bottom: 0,
                            fontWeight: 'bold',
                        }}
                    >
                        ${car.cost}/day
                    </Text>
                ) : (
                    <View style={styles.rating}>
                        <StarIcon />
                        <Text>{car.rate}</Text>
                    </View>
                )}
            </Button>
        </View>
    );
};

export default CarItem;
