import COLORS from '~/components/Colors';

const { StyleSheet, StatusBar } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        padding: 20,
    },
    login: {
        fontSize: 16,
        color: COLORS.white,
        alignSelf: 'center',
    },
    forgot: {
        alignSelf: 'center',
        color: COLORS.textColor,
        marginTop: 10,
    },
});

export default styles;
