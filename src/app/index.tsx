import { Link } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Button } from '@/components/button';
import { Input } from '@/components/input';

export default function App() {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled'>
            <View style={styles.container}>
                <Image
                    source={require("@/assets/img01.png")}
                    style={styles.ilustration}
                />
                <Text style={styles.title}>Login</Text>
                <View style={styles.form}>
                    <Input placeholder="email or number phone" />
                    <Input placeholder="password" secureTextEntry />
                    <Button label="Login" />
                </View>
                <Text style={styles.footertext}>Don't you have an account? Create account {' '}
                    <Link href='/signup' style={styles.footerlink}>
                     here
                    </Link>
                </Text>
            </View>
        </ScrollView>
        </KeyboardAvoidingView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 32,
        backgroundColor: '#FDFDFDFD'
    },
    ilustration: {
        width: '100%',
        height: 330,
        marginTop: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 24,
        fontWeight: '900',
    },
    form: {
        marginTop: 2,
        gap: 12,
        paddingVertical: 10,
    },
    footertext: {
        marginTop: 20,
        textAlign: 'center',
        color: '#A0A0A0',
    },
    footerlink: {
        color: '#3366FF',
        fontWeight: '700',
    }
})