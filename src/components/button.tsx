import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

type ButtonProps = TouchableOpacityProps & {
    label: string;
}

export function Button({ label, ...rest }: ButtonProps) {
    return(
        <TouchableOpacity style={styles.button} activeOpacity={0.7} {...rest}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: '100%',
        height: 48,
        backgroundColor: '#3366FF',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF'
    }
})