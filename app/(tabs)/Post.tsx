import {Pressable, StyleSheet, TextInput} from 'react-native';

//import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {useNavigation, useRouter} from "expo-router";
import {useLayoutEffect, useState} from "react";

export default function PostScreen() {

  const [content, setContent] = useState('');

  const navigation = useNavigation();
  const router = useRouter();
const postButton = () => {
  console.warn('posted ', content);
  router.push('/(tabs)/');
  // setContent('');
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      title: 'New Post',
      headerRight: () =>
          <Pressable onPress={postButton} style={styles.Button}>
            <Text style={styles.ButtonText}>Post</Text>
          </Pressable>
    });
  }, [postButton])
  return (
    <View style={styles.container}>
      <TextInput
          placeholder=" lets add input"
          style={styles.input}
          multiline
          value={content}
          onChangeText={setContent}
 />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 15,



  },
  input: {
    backgroundColor: 'white',
    fontSize: 19,
    fontWeight: '500',
  },
  Button: {
    padding: 8,
    backgroundColor: 'royalblue',
    borderRadius: 50,
    paddingHorizontal: 30,
    alignItems: "center",
    // paddingRight: 10,
    marginRight: 10,


  },
  ButtonText: {
    fontSize: 15,
    color: 'white',
    fontWeight: "bold"
  }
  // title: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  // },
  // separator: {
  //   marginVertical: 30,
  //   height: 1,
  //   width: '80%',
  // },
});
