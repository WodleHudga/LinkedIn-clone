import React from 'react';
import {Text} from "react-native";
//import post from '../../assets/data/posts.json';
import {useLocalSearchParams} from "expo-router";

export default function users() {
    const {id} = useLocalSearchParams();


    return (
        <Text> Hi there: {id} </Text>

    );
}