import { useNavigation } from '@react-navigation/native';
import { Text, View, TouchableOpacity } from 'react-native';
import Button from '~/components/Button';
import COLORS from '~/components/Colors';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import styles from './styles';

import Checkbox from 'expo-checkbox';
import { useState } from 'react';

function SignUp() {

    const navigation = useNavigation();

    const [isSelected, setSelection] = useState(false);

    return (
        <View style={styles.container}>
            <DefaultLayout
                headerText="Sign Up"
                headerStyle={{ alignSelf: 'center' }}
                headerTextStyle={{
                    fontSize: 25,
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    marginBottom: 40,
                }}>

                <View>
                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }} />

                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }} />

                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }} />

                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }} />

                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }} />
                </View>

                <View style={styles.policy}>
                    <Checkbox
                        value={isSelected}
                        onValueChange={setSelection}
                        style={styles.checkbox} />

                    <Text style={styles.policyText}>
                        Accept{' '}
                        <TouchableOpacity>
                            <Text style={styles.policyTerms}>Terms of Service{' '}</Text>
                        </TouchableOpacity>
                        and{' '}
                        <TouchableOpacity>
                            <Text style={styles.policyTerms}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </Text>
                </View>

                <View style={styles.btnSignUp}>
                    <Button style={{ backgroundColor: COLORS.primary, padding: 15, borderRadius: 15 }}
                        onPress={() => { navigation.navigate('Home') }}>

                        <Text style={styles.login}>Sign Up</Text>
                    </Button>

                    <Button onPress={() => { navigation.navigate('Home') }}>
                        <Text style={[styles.forgot, { marginTop: 30 }]}>
                            Already have an account?{' '}
                            <Text style={{ color: COLORS.primary }}>
                                Login
                            </Text>
                        </Text>
                    </Button>
                </View>
            </DefaultLayout>
        </View>
    );
}

export default SignUp;
