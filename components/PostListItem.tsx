import {Text, View,StyleSheet, Image} from "react-native";
import {Post } from '@/types';
import {FontAwesome} from "@expo/vector-icons";

type PostListItemProps = {
    post: Post;
}
type FooterProp={
    text: string;
    icon: React.ComponentProps<typeof FontAwesome>['name'];
}

function Footer({text, icon}: FooterProp) {
    return(
        <View style={{flexDirection: 'row'}}>
            <FontAwesome name={icon} size={20} color="gray" style={{marginBottom: 10}} />
            <Text style={{margin: 5, color: 'gray', fontWeight: '600'}}>{text}</Text>
        </View>
    )
}
export default function PostListItem({post}: PostListItemProps) {

    return (
        <View >
            {/*Header */}
            <View style={styles.header}>
                <Image source={{uri: post.author.image}} style={styles.userImage} />

            <View>
                <Text style={styles.userName}>{post.author.name}</Text>
                <Text>{post.author.position}</Text>
            </View>
            </View>
{/*            text content*/}
<Text style={styles.content}>{post.content}</Text>
            
        {/*    image*/}
            {
                post.image && (
                <Image source={{uri: post.image}} style={styles.postImage}/>
            )
            }
        {/*    footer*/}
            <View style={styles.footer}>
                <Footer text="Likes" icon="thumbs-o-up" />
                <Footer text="Comment" icon="comment-o" />
                <Footer text="Share" icon="share" />
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    userName:{
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 5


    },
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,

    },
    header: {
flexDirection: 'row',
        // width: 150,
        // height: 150,
        padding: 10,
        alignItems: 'center',
    },
    postImage: {
        // height: 200,
        width: '100%',
        aspectRatio: 1,
    },
    content: {
        fontStyle: "normal",
        margin: 10,
        marginTop: 0,

    },
    footer: {
        flexDirection: 'row',
        // width: 150,
        // height: 150,
        padding: 10,
borderTopWidth: 0.5,
        borderColor: 'lightgray',
        justifyContent: 'space-around',
    }

})