import { Text, View } from 'react-native';

function Header({ headerText, CustomHeader, headerStyle }) {
    return (
        <View style={headerStyle}>
            {CustomHeader ? CustomHeader : <Text>{headerText}</Text>}
        <View>

    );
}

export default Header;
