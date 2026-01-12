import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import { Button } from '@/components/button';
import { Input } from '@/components/input';
import { ThemeProvider, useTheme } from '@/themes/ThemeContext';


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
    },
    iconTheme: {
        alignItems: 'center',
        alignContent: 'center',
        marginTop: 20,
        marginBottom: -7.5,
    },
});

function HomeContent() {
    const { toggleTheme, theme } = useTheme();
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.background }}>
                <KeyboardAvoidingView style={{}} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false}>
                        <View style={styles.iconTheme}>
                            <TouchableOpacity onPress={toggleTheme}>
                                <Ionicons
                                    name={theme.background === '#0F172A' ? 'sunny' : 'moon'}
                                    size={100}
                                    color={theme.text}
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={[styles.container, { backgroundColor: theme.background }]}>
                            <Image
                                source={require("@/assets/img01.png")}
                                style={styles.ilustration}
                            />
                            <Text style={[styles.title, { color: theme.text }]}>Sign In</Text>
                            <View style={styles.form}>
                                <Input placeholder="email or number phone" />
                                <Input placeholder="password" secureTextEntry />
                                <Button label="Sign In" />
                            </View>
                            <Text style={[styles.footertext, { color: theme.text }]}>Don't you have an account? Create account {' '}
                                <Link href='/signup' style={[styles.footerlink, { color: theme.primary }]}>
                                    here
                                </Link>
                            </Text>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default function App() {
    return (
        <ThemeProvider>
            <HomeContent />
        </ThemeProvider>
    );
}