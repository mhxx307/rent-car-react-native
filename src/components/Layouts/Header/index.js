import { Text, View } from 'react-native';

function Header({ headerText, CustomHeader }) {
    return (
        <View>{CustomHeader ? CustomHeader : <Text>{headerText}</Text>}</View>
    );
}

export default Header;
