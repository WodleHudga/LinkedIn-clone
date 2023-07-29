import { Text, FlatList, ActivityIndicator} from 'react-native';
import PostListItem from '../../components/PostListItem';
import {gql, useQuery} from "@apollo/client";
import React from "react";
//import posts from '../../assets/data/posts.json';


const postList = gql`
    query Post {
        postList {
            id
            content
            image
            profile {
                id
                name
                image
                position
            }
        }
    }
`;

//const firstPost = posts[0];
export default function Home() {

    const {loading, error, data} = useQuery(postList);

    if(loading){
        return <ActivityIndicator />;
    }
    if(error){
        console.log(error);
        return <Text>something went wrong!</Text>
    }
    console.log(data);
  return (
   <FlatList
       data={data.postList}
       renderItem={({item}) =>
         <PostListItem post={item} />
       }
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{gap: 5}}
   />
  );
}


