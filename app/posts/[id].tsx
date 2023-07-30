import {ActivityIndicator, ScrollView, Text} from "react-native";
import posts from '../../assets/data/posts.json';
import {useLocalSearchParams} from "expo-router";
import PostListItem from "../../components/PostListItem";
import {gql, useQuery} from "@apollo/client";
import React from "react";

const postID = gql`
    query MyQuery($id: ID!) {
        post(id: $id) {
            id
            image
            content
            profile {
                id
                image
                name
                position
            }
        }
    }
`;
export default function PostDetailScreen(){
    const {id } = useLocalSearchParams();
    const {loading, error, data} = useQuery(postID, {variables: {
        id
        }});

    if(loading){
        return <ActivityIndicator />;
    }
    if(error){
        console.log(error);
        return <Text>something went wrong!</Text>
    }
    console.log(data);
    return(
        <ScrollView>
            <PostListItem post={data.post} />
        </ScrollView>

    );
}