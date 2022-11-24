import COLORS from '~/components/Colors';

const { StyleSheet, StatusBar } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});

export default styles;
