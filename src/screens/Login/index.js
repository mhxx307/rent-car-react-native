import { useNavigation } from '@react-navigation/native';
import { Text, View } from 'react-native';
import Button from '~/components/Button';
import COLORS from '~/components/Colors';
import DefaultLayout from '~/components/Layouts/DefaultLayout';
import Search from '~/components/Search';
import styles from './styles';

function Login() {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <DefaultLayout
                headerText="Rentacar"
                headerStyle={{ alignSelf: 'center' }}
                headerTextStyle={{
                    fontSize: 25,
                    color: COLORS.primary,
                    fontWeight: 'bold',
                    marginBottom: 40,
                }}
            >
                <View>
                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }}
                    />
                    <Search
                        showBtnFilter={false}
                        height={60}
                        style={{ marginTop: 20 }}
                    />
                </View>

                <View style={{ marginTop: 50 }}>
                    <Button
                        style={{
                            backgroundColor: COLORS.primary,
                            padding: 10,
                            borderRadius: 10,
                        }}
                        onPress={() => {
                            navigation.navigate('Main');
                        }}
                    >
                        <Text style={styles.login}>Login</Text>
                    </Button>
                    
                    <Button>
                        <Text style={styles.forgot}>Forgot Password ?</Text>
                    </Button>

                    <Button onPress={() => { navigation.navigate('SignUpScreen') }}>
                        <Text style={[styles.forgot, { marginTop: 60 }]}>
                            Already have an account?{' '}
                            <Text style={{ color: COLORS.primary }}>
                                Sign Up
                            </Text>
                        </Text>
                    </Button>
                </View>
            </DefaultLayout>
        </View>
    );
}

export default Login;
