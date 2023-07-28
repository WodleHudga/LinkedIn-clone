import {View, FlatList} from 'react-native';
import users from '../assets/data/users.json';
import UserListItem from '../components/UserListitem';
import {useNavigation} from "expo-router";
import {useLayoutEffect, useState} from "react";
export default function searchScreen () {
    const navigation = useNavigation();
    const [search, setSearch]= useState('');

    useLayoutEffect(() => {

        navigation.setOptions({
            headerSearchBarOptions: {
                placeholder: "search users",
                onChangeText: setSearch,

            },
        });
    }, [navigation])
    return (
        <View style={{backgroundColor: 'white'}}>
            <FlatList
                data={users}
                renderItem={({item}) => <UserListItem  user={item}/>}
            />
        </View>
    )
}