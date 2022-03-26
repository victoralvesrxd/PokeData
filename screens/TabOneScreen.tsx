import { StyleSheet, ScrollView, StatusBar } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <ScrollView>
        <View style={styles.container}>
        <View style={styles.card}>
          <Text style={styles.assets}>129.4M</Text>
          <Text style={styles.rent_text}>Rent</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.assets}>193</Text>
          <Text style={styles.rent_text}>Assets</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.assets}>112</Text>
          <Text style={styles.rent_text}>Locations</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.assets}>634k</Text>
          <Text style={styles.rent_text}>Area</Text>
        </View>
        </View>
      </ScrollView>
    // <View style={styles.container}>
    //   <Text style={styles.title}>Tab One</Text>
    //   <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    //   <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    // </View>
  );
}

const styles = StyleSheet.create({
  rent_text: {
    color: "#a3afb7",
    fontSize: 22,
    margin: 20,
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: "center"
  },
  card: {
    margin: 20,
    backgroundColor: "#fff",
    width: "60%",
    height: 150,
    alignContent: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 5
  },
  assets: {
    fontSize: 46,
    margin: 20,
    color: "rgb(118, 131, 143)",
    marginBottom: 0,
    textAlign: "center"
  }
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
