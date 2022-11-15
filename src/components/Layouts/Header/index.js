import { Text, View } from 'react-native';
import Search from '~/components/Search';

function Header({ headerText, CustomHeader }) {
    return (
        <View>
            {CustomHeader ? CustomHeader : <Text>{headerText}</Text>}
            <Search height={70} style={{ marginTop: 20 }} />
        </View>
    );
}

export default Header;
