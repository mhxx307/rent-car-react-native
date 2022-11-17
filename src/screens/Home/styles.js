import { StyleSheet, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    content: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    menu: {
        paddingTop: 40,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginRight: 16,
        borderRadius: 5,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    brandWrapper: {
        marginTop: 20,
    },
});

export default styles;
