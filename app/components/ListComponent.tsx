import { View, StyleSheet,Text,FlatList, Pressable } from 'react-native';

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
      paddingHorizontal: 10,
    },

    gridItem: {
      flex: 1,
      margin: 6,
      height: 50,
      backgroundColor: "#e0e0e0",
      borderRadius: 10,
      justifyContent: "center",
      alignItems: "center",
    },

    itemText: {
      fontSize: 16,
      color: "#333",
      fontWeight: "500",
    },
  });
    return(
        <View style={styles.gridContainer}>
                <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={6} //FlatList does NOT respect flex layout for its items.
        renderItem={({ item }) => (

          <Pressable style={styles.gridItem}>
          <Text style={styles.itemText}>{item.title}</Text>
        </Pressable>
        )}
      />
        </View>
    )
}