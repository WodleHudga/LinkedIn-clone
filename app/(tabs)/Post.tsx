import {Image, Pressable, StyleSheet, TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';
//import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import {useNavigation, useRouter} from "expo-router";
import {useLayoutEffect, useState} from "react";
import * as ImagePicker from 'expo-image-picker';

export default function PostScreen() {

  const [content, setContent] = useState('');
  const [image, setImage] = useState<string | null>(null);
  const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      console.log(result);

      if (!result.canceled) {
        setImage(result.assets[0].uri);
      }
    };


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
      {image && <Image source={{uri: image}} style={styles.image} />}
<View style={styles.footer}>
  <Pressable  onPress={pickImage} style={styles.iconButton}>
    <Feather
        name="image"
        size={24}
        color="black"
   />
  </Pressable>
  <Pressable   style={styles.iconButton}>
    <Feather
        name="camera"
        size={24}
        color="black"
    />
  </Pressable>
  <Pressable   style={styles.iconButton}>
    <Feather
        name="file"
        size={24}
        color="black"
    />
  </Pressable>
</View>



    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
     padding: 15,



  },
  footer: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: "space-around",

  },
  iconButton: {
    backgroundColor: 'lightgrey',
    padding: 10,
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: "hidden",
    alignItems: 'center',
    justifyContent: "center"

  },
  image: {
    width: '100%',
    aspectRatio: 1,
    marginTop: 'auto'
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
