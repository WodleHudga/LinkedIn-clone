import { Text, FlatList, ActivityIndicator} from 'react-native';
import PostListItem from '../../components/PostListItem';
import {gql, useQuery} from "@apollo/client";
import React, {useState} from "react";
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

const postPaginated = gql`
    query postPaginatedList($first: Int, $after: Int) {
        postPaginatedList(first: $first, after: $after) {
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
    }`;

//const firstPost = posts[0];
export default function Home() {
    const [hasmore, setHasmore] = useState(true);

    const {loading, error, data, fetchMore} = useQuery(postPaginated, {
        variables: {
            first: 2
        }
    });

    if (loading) {
        return <ActivityIndicator/>;
    }
    if (error) {
        console.log(error);
        return <Text>something went wrong!</Text>
    }
    console.log(data);
    const loadMore = async () => {
        if (!hasmore) {
            return;
        }
        const res = await fetchMore(
            {variables: {after: data.postPaginatedList.length}}
        );
        if (res.data.postPaginatedList.length === 0) {
            setHasmore(false);
        }
    };
    return (
        <FlatList
            data={data.postPaginatedList}
            renderItem={({item}) =>
                <PostListItem post={item}/>
            }
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{gap: 5}}
            onEndReached={loadMore}
            //     ListFooterComponent={() => (
            //         <Text onPress={loadMore} style={{alignSelf: 'center', fontWeight: '400', fontSize: 15, color: 'royalblue'}}>Load More</Text>)}
            // />
            // );
            //}
        />
    );
}

