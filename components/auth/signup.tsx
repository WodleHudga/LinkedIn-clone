import * as React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { useSignUp } from "@clerk/clerk-expo";

export default function SignUpScreen() {
    const { isLoaded, signUp, setActive } = useSignUp();

    const [emailAddress, setEmailAddress] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [pendingVerification, setPendingVerification] = React.useState(false);
    const [code, setCode] = React.useState("");

    // start the sign up process.
    const onSignUpPress = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            await signUp.create({
                emailAddress,
                password,
            });

            // send the email.
            await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

            // change the UI to our pending section.
            setPendingVerification(true);
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    // This verifies the user using email code that is delivered.
    const onPressVerify = async () => {
        if (!isLoaded) {
            return;
        }

        try {
            const completeSignUp = await signUp.attemptEmailAddressVerification({
                code,
            });

            await setActive({ session: completeSignUp.createdSessionId });
        } catch (err: any) {
            console.error(JSON.stringify(err, null, 2));
        }
    };

    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 20 }}>
            {!pendingVerification && (
        <View style={{width: '100%',}}>
            <View >
                <TextInput
                    autoCapitalize="none"
    value={emailAddress}
    placeholder="Email..."
    onChangeText={(email) => setEmailAddress(email)}
                    style={{
                        fontSize: 24,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        width: '100%',
                        //color: 'pink'
                        marginVertical: 5,

                    }}
    />
    </View>

    <View>
    <TextInput
        value={password}
    placeholder="Password..."
    placeholderTextColor="#000"
    secureTextEntry={true}
    onChangeText={(password) => setPassword(password)}
        style={{
            fontSize: 24,
            borderColor: 'gray',
            borderWidth: 1,
            padding: 10,
            width: '100%',
            marginVertical: 5,
            //color: 'pink'

        }}
    />
    </View>

    <TouchableOpacity onPress={onSignUpPress}     style={{
        backgroundColor: 'royalblue',
        padding: 20,
        marginVertical: 5,
        alignItems: 'center',

    }}>
        <Text>Sign up</Text>
    </TouchableOpacity>
    </View>
)}
    {pendingVerification && (
        <View>
            <View>
                <TextInput
                    value={code}
        placeholder="Code..."
        onChangeText={(code) => setCode(code)}
                    style={{
                        fontSize: 24,
                        borderColor: 'gray',
                        borderWidth: 1,
                        padding: 10,
                        width: '100%',
                        marginVertical: 5,
                    }}

        />
        </View>
        <TouchableOpacity onPress={onPressVerify} style={{
            backgroundColor: 'royalblue',
            padding: 20,
            marginVertical: 5,
            alignItems: 'center',

        }}>
        <Text>Verify Email</Text>
    </TouchableOpacity>
    </View>
    )}
    </View>
);
}