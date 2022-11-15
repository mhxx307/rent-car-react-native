import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Header from '~/components/Layouts/Header';

const DefaultLayout = ({
    children,
    headerText = 'Unknown',
    CustomHeader = null,
}) => {
    return (
        <View style={styles.container}>
            <Header headerText={headerText} CustomHeader={CustomHeader} />
            <View>{children}</View>
        </View>
    );
};

export default DefaultLayout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
});
