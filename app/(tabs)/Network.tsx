import { Text, View,StyleSheet } from 'react-native';

//import EditScreenInfo from '@/components/EditScreenInfo';
//import {  } from '@/components/Themed';

export default function NetworkScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Network</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
