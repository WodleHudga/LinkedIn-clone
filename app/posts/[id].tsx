import {ScrollView,Text} from "react-native";
import posts from '../../assets/data/posts.json';
import {useLocalSearchParams} from "expo-router";
//import PostListItem from "@/components/PostListItem";

import PostListItem from "../../components/PostListItem";

export default function PostDetailScreen(){
    const {id } = useLocalSearchParams();

    const post = posts.find((post) => post.id === id);
    if(!post){
       return <Text>post not found</Text>;
    }
    return(
        <ScrollView>
            <PostListItem post={post} />
        </ScrollView>

    );
}