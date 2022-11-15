import { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { FilterIcon, SearchIcon } from '~/components/Icons';
import Button from '~/components/Button';
import styles from './styles';

function Search({ height, showBtnFilter = true, style }) {
    const [searchValue, setSearchValue] = useState('');
    return (
        <View style={[styles.container, { height: height }, style]}>
            <View style={styles.searchSection}>
                <Button>
                    <SearchIcon style={styles.searchIcon} />
                </Button>
                <TextInput
                    style={styles.input}
                    value={searchValue}
                    placeholder="Search"
                    onChangeText={(searchString) =>
                        setSearchValue(searchString)
                    }
                    underlineColorAndroid="transparent"
                />
            </View>

            {showBtnFilter && (
                <Button style={styles.filterBtn}>
                    <FilterIcon />
                </Button>
            )}
        </View>
    );
}

export default Search;
