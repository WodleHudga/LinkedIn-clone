import {Text, View, Image, StyleSheet} from 'react-native';
import {experience} from "@/types";
//import {gray} from "colorette";

type ExperienceProps = {
    Experience: experience;
}
export default function Experience({
                                       Experience,
                                   }:ExperienceProps) {
    return(
        <View style={styles.container}>
            <Image source={{uri: Experience.companyimage}} style={styles.Image} />
           <View>
               <Text  style={styles.title}>{Experience.title}</Text>
               <Text>{Experience.companyname}</Text>
           </View>
        </View>
 );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        padding: 15,
        marginBottom: 5,
        borderBottomWidth: 1,
        borderColor: 'lightgrey',
        alignItems: "center",
    },
    Image:{
        width: 50,
        aspectRatio: 1,
        marginRight: 5,
    },
    title:{
        fontSize: 16,
        fontWeight: '500',
    },
})