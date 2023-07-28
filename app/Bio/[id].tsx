import {useState, useLayoutEffect} from 'react';
import {StyleSheet, Text, View, Image, Pressable, ScrollView} from "react-native";
//import post from '../../assets/data/posts.json';
import {useLocalSearchParams,useNavigation} from "expo-router";
import userJson from '../../assets/data/user.json';
import Experience from '../../components/Experience';

export default function users() {

    const [user, SetUser] = useState(userJson);
    const {id} = useLocalSearchParams();

    const Connect = () => {
        console.warn('Connect is pressed');
    }
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({ title: user.name });
    }, [user?.name]);

    return (

        // header
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Image source={{uri: user.backImage}} style={styles.backImage} />
              <Image source={{uri: user.image}} style={styles.images} />
                <Text style={styles.Uname}>{user.name}</Text>
                <Text style={styles.Uposition}>{user.position}</Text>
                <Pressable onPress={Connect} style={styles.Button}>
                    <Text style={styles.ButtonText}>Connect</Text>
                </Pressable>

            </View>
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    About
                </Text>
                <Text style={styles.sectionBody}>
                    {user.about}
                </Text>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>
                    Experience
                </Text>
                {
                    user.experience?.map(experience =><Experience key={experience.id} Experience={experience}/>)
                }

            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create(
    {
        container:
            {
                // padding: 5,
                // marginVertical: 5,
                // backgroundColor: 'white',

            },
        header:
            {
backgroundColor: 'white',
                marginBottom: 5,
            },
        backImage:
            {
                width: '100%',
                aspectRatio: 5/2,
                zIndex: -1,
                marginBottom: -50,

            },
        images:
            {
                aspectRatio: 1,
                borderRadius: 50,
                width: 100,
                marginLeft: 20,
                zIndex: 2,
                borderWidth: 3,
                borderColor: 'white',
                marginBottom: 10,
                // borderRadius: '50%',
            },
        Uname:
            {
                fontSize: 24,
                fontWeight: "500",
                marginLeft: 20,

            },
        Uposition:
            {
                fontSize: 16,
                // fontWeight:,
                marginLeft: 20,
            },
        Button: {
            backgroundColor: 'royalblue',
            padding: 10,
            borderRadius: 100,
            alignItems: 'center',
            marginVertical: 15,
            marginHorizontal: 20
        },
        ButtonText: {
            color: 'white',
            fontWeight: '600',
            fontSize: 16,
        },
        aboutHeader: {
            justifyContent: "center",
            fontSize: 23,
            fontWeight: '400',
            marginLeft: 20,

        },
        aboutBody: {
            marginLeft: 20,
            fontSize: 14,
            marginTop: 10,

        },
        section:{
backgroundColor: 'white',
            marginVertical: 5,
            padding: 5,
            borderRadius: 5,
        },
        sectionTitle: {
            // justifyContent: "center",
            fontSize: 18,
            fontWeight: '400',
            marginLeft: 20,
        },
        sectionBody: {
            fontSize: 14,
            marginLeft: 20,
            lineHeight: 18,

        }
    }
)