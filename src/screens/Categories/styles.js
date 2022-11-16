const { StyleSheet, StatusBar } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },

    brandWrapper: {
        marginTop: 30,
    },

    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    item: {
        backgroundColor: 'gray',
        padding: 20,
        marginVertical: 8,
        marginRight: 16,
    },
    content: {
        paddingHorizontal: 20,
    },
});

export default styles;
