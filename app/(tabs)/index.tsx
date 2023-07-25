import { StyleSheet, FlatList } from 'react-native';
import PostListItem from '@/components/PostListItem';
import posts from '../../assets/data/posts.json';

const firstPost = posts[0];
export default function Home() {
  return (
   <FlatList
       data={posts}
       renderItem={({item}) =>
         <PostListItem post={item} />
       }
       showsVerticalScrollIndicator={false}
       contentContainerStyle={{gap: 5}}
   />
  );
}


