import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
<<<<<<< HEAD
=======
import {ListComponent} from './components/ListComponent'
>>>>>>> 5f76233 (finish)
import { ListComponent } from './components/ListComponent'
import { FilterComponent } from './components/FilterComponent';
import { TableComponent } from './components/TableComponent';

export default function App() {
  const PlaceHolderList = [
    { id: '24', title: 'Elemento 24' },]
  return (
    <View style={styles.container}>
      
      <View style={styles.topContainer}>
    
      <ListComponent data={PlaceHolderList} />
      </View>
      <View style={styles.bottomContainer}>
      <FilterComponent></FilterComponent>
      <ListComponent data={PlaceHolderList} />
      </View>
    <TableComponent/>
     
    </View>
  );
