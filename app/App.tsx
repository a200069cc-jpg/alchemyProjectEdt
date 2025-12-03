import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ListComponent } from './components/ListComponent'
import { FilterComponent } from './components/FilterComponent';
import { TableComponent } from './components/TableComponent';

export default function App() {
  const PlaceHolderList = [
    { id: '1', title: 'Elemento 1' },
    { id: '2', title: 'Elemento 2' },
    { id: '3', title: 'Elemento 3' },
    { id: '4', title: 'Elemento 4' },
    { id: '5', title: 'Elemento 5' },
    { id: '6', title: 'Elemento 6' },
    { id: '7', title: 'Elemento 7' },
    { id: '8', title: 'Elemento 8' },
    { id: '9', title: 'Elemento 9' },
    { id: '10', title: 'Elemento 10' },
    { id: '11', title: 'Elemento 11' },
    { id: '12', title: 'Elemento 12' },
    { id: '13', title: 'Elemento 13' },
    { id: '14', title: 'Elemento 14' },
    { id: '15', title: 'Elemento 15' },
    { id: '16', title: 'Elemento 16' },
    { id: '17', title: 'Elemento 17' },
    { id: '18', title: 'Elemento 18' },
    { id: '19', title: 'Elemento 19' },
    { id: '20', title: 'Elemento 20' },
    { id: '21', title: 'Elemento 21' },
    { id: '22', title: 'Elemento 22' },
    { id: '23', title: 'Elemento 23' },
    { id: '24', title: 'Elemento 24' },]
  return (
    <View style={styles.container}>
    <TableComponent/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  
  },
  topContainer: {
    height: "70%",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },
  bottomContainer: {
    flexDirection: "row",
    width: "100%",
    borderTopWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    backgroundColor: "#fff",
  },

});
