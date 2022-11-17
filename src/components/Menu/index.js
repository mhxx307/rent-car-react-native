import { Image, StyleSheet, View } from 'react-native';
import { BellIcon } from '~/components/Icons';
import COLORS from '~/components/Colors';
import Button from '~/components/Button';

const Menu = ({ ...passProps }) => {
    const user = {
        name: 'John Doe',
        img: 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
    };
    const props = {
        ...passProps,
    };
    return (
        <View {...props}>
            <Image source={{ uri: user.img }} style={styles.image} />
            <Button style={styles.btnBell}>
                <BellIcon color={COLORS.primary} />
            </Button>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
    },
    btnBell: {
        height: 40,
        width: 40,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.textColor,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
