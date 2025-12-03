import { View, StyleSheet,Text,FlatList, Button } from 'react-native';

type FlatListItem = {
    id: string;
    title: string;
   
  }
  type Props = {
   data: FlatListItem[];
  }
  

export function ListComponent ({data}:Props){
   const styles = StyleSheet.create({
    gridContainer: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      paddingHorizontal: 10,
    
    },
  
    gridItem: {
      width: "15%",
      height: 50,
      backgroundColor: "#fafafa",
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#ddd",
    },
  
  })
    return(
        <View style={styles.gridContainer}>
                <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={6} //FlatList does NOT respect flex layout for its items.
        renderItem={({ item }) => (

          <Button title={item.title} ></Button>
        )}
      />
        </View>
    )
}