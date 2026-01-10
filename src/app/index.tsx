import { View, Image, StyleSheet, Text, ScrollView,  } from 'react-native';


import { Input } from '@/components/input';
import { Button } from '@/components/button';

export default function App() {
    return (
        <ScrollView>
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
            <Text style={styles.footertext}>Don't you have an account? Create account here</Text>
        </View>
        </ScrollView>
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
    }
})