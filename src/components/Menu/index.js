import { Image, StyleSheet, View } from 'react-native';
import { BellIcon, DarkLightIcon } from '~/components/Icons';
import COLORS from '~/components/Colors';
import Button from '~/components/Button';
import { CarContext } from '~/store/Context';
import { useContext } from 'react';

const Menu = ({ ...passProps }) => {
    const user = {
        name: 'John Doe',
        img: 'https://png.pngtree.com/element_our/png/20181206/users-vector-icon-png_260862.jpg',
    };
    const props = {
        ...passProps,
    };

    const { darkTheme, setDarkTheme } = useContext(CarContext);

    return (
        <View {...props}>
            <Image source={{ uri: user.img }} style={styles.image} />
            <View style={{ flexDirection: 'row' }}>
                <Button
                    style={styles.btnBell}
                    onPress={() => setDarkTheme(!darkTheme)}
                >
                    <DarkLightIcon
                        color={darkTheme ? COLORS.white : COLORS.black}
                    />
                </Button>
                <View style={{ width: 20 }}></View>
                <Button style={styles.btnBell}>
                    <BellIcon color={COLORS.primary} />
                </Button>
            </View>
        </View>
    );
};

export default Menu;

const styles = StyleSheet.create({
    image: {
        height: 40,
        width: 40,
        borderRadius: 5,
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
