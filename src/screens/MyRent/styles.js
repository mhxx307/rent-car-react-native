const { StyleSheet, StatusBar } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: '#fff',
    },
});

export default styles;
