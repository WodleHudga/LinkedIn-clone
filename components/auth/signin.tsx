import React from "react";
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native";
import { useSignIn } from "@clerk/clerk-expo";

export default function SignInScreen() {
    const { signIn, setActive, isLoaded } = useSignIn();

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");

    const onSignInPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignIn = await signIn.create({
                identifier: emailAddress,
                password,
            });
            // This is an important step,
            // This indicates the user is signed in
            await setActive({ session: completeSignIn.createdSessionId });
        } catch (err) {
            console.log('error:',err);
        }
    };
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            <View style={{width: '100%',}}>
                <TextInput
                    autoCapitalize="none"
                    value={emailAddress}
                    placeholder="Email..."
                    onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
                    style={styles.input}
                />
            </View>

            <View style={{width: '100%',}}>
                <TextInput
                    value={password}
                    placeholder="Password..."
                    secureTextEntry={true}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.input}
                />
            </View>

            <TouchableOpacity onPress={onSignInPress}  style={styles.button}>
                <Text>Sign in</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: 'royalblue',
        padding: 20,
        marginVertical: 5,
        alignItems: 'center',
        width: '100%'
    },
     input: {
         fontSize: 20,
         borderColor: 'gray',
         borderWidth: 1,
         padding: 10,
         width: '100%',
         marginVertical: 5,
     },

});