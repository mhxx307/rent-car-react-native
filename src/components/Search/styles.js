const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    searchSection: {
        flex: 1,
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
    },

    searchIcon: {
        padding: 20,
        color: '#999',
    },

    input: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#fff',
        color: '#424242',
    },

    filterBtn: {
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 20,
        marginLeft: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
    },
});

export default styles;