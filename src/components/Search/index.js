import { TextInput, View } from 'react-native';

import { FilterIcon, SearchIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './styles';

function Search({
    height,
    showBtnFilter = true,
    style,
    onPressSearch,
    onPressFilter,
    ...passProps
}) {
    const props = {
        ...passProps,
    };

    return (
        <View style={[styles.container, { height: height }, style]}>
            <View style={styles.searchSection}>
                <Button onPress={onPressSearch}>
                    <SearchIcon style={styles.searchIcon} />
                </Button>
                <TextInput
                    style={styles.input}
                    placeholder="Search"
                    underlineColorAndroid="transparent"
                    {...props}
                />
            </View>

            {showBtnFilter && (
                <Button style={styles.filterBtn} onPress={onPressFilter}>
                    <FilterIcon />
                </Button>
            )}
        </View>
    );
}

export default Search;
