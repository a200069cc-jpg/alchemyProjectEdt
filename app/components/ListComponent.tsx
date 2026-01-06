import { View, StyleSheet,Text,FlatList, Pressable } from 'react-native';
import { ElementComponent } from './ElementComponent';

type FlatListItem = {
    id: string;
    title: string;
   
  }
  type Props = {
   data: FlatListItem[];
  }
  

export function ListComponent ({data}:Props){
 
    return(
        <View style={styles.container}>
        {data.map(item => (
          <ElementComponent key={item.id} item={item}/>
        ))}
        </View>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    backgroundColor: '#D6D6D6',
  },
});