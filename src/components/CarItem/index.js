import { Image, Text, View } from 'react-native';

import { MarkIcon, StarIcon } from '~/components/Icons';
import Button from '~/components/Button';
import COLORS from '~/components/Colors';

import styles from './styles';

const CarItem = ({
    car,
    type2 = false,
    style = {},
    widthImage = '100%',
    heightImage = 80,
}) => {
    return (
        <View
            style={[
                { ...styles.container, backgroundColor: COLORS.white },
                style,
            ]}
        >
            <Button style={{ position: 'absolute', right: 5, top: 5 }}>
                <MarkIcon />
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
            <Button style={styles.imgWrapper}>
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
