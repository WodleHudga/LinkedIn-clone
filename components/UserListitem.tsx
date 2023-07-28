import {Text, View,StyleSheet, Image, Pressable} from "react-native";
import {User} from '@/types';
import React from "react";
import { Link} from 'expo-router';

type UserListProps = {
    user : User;
}
export default function UserList({user}: UserListProps){

    return(
        <Link href={`/Bio/${user.id}`} asChild>
            <Pressable style={styles.header}>
                <Image source={{uri: user.image}} style={styles.userImage} />

                <View>
                    <Text style={styles.userName}>{user.name}</Text>
                    <Text>{user.position}</Text>
                </View>
            </Pressable>
        </Link>
    );
}

const styles = StyleSheet.create({
    userName:{
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5,



    },
    header: {
        flexDirection: 'row',
        // width: 150,
        // height: 150,
        padding: 10,
        alignItems: 'center',
    },
    container: {
        backgroundColor: 'white',
        width: '100%',
        maxWidth: 500,
        alignSelf: "center"
    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,

    },
});