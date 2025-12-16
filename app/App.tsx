import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ListComponent} from './components/ListComponent'
import { ListComponent } from './components/ListComponent'
import { FilterComponent } from './components/FilterComponent';
import { ChatComponent } from './components/ChatComponent';
import { MenuComponent } from './components/MenuComponent';

import { GluestackUIProvider } from '@/components/ui/gluestack-ui-provider';
import '@/global.css';
import { TableComponent } from './components/TableComponent';

export default function App() {
  const PlaceHolderList = [
    { id: '24', title: 'Elemento 24' },]
  return (
    <View style={styles.container}>    
      <ListComponent data={PlaceHolderList} />
      </View>
      <View style={styles.bottomContainer}>
      <FilterComponent></FilterComponent>
      <ListComponent data={PlaceHolderList} />
      </View>
    <TableComponent/>
     
    </View>
    
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chat:{
      flex:1,
      alignSelf:"flex-end",
      justifyContent: "flex-end",
      alignItems: "center",
  },
  menu:{
    flex:1,
    alignSelf:"flex-end",
    alignItems:"center"
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
